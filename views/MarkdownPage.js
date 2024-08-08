"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { marked } from "marked";


const MarkdownPage = () => {
  const router = useRouter();
  if (router.isReady) {
    return <_MarkdownPage />;
  } else {
    return <div>Loading...</div>;
  }
}

const _MarkdownPage = () => {
  const router = useRouter();
  const { filename } = router.query;
  console.log(router.query);
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!filename) return;

    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/assets/news/${filename}.md`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const text = await response.text();
        // Remove front matter if it exists
        const frontMatterRegex = /^---\s*[\s\S]*?\s*---\s*/;
        const contentWithoutFrontMatter = text.replace(frontMatterRegex, "");
        // Convert Markdown to HTML
        const html = marked(contentWithoutFrontMatter);
        // Set the HTML content
        setHtmlContent(html);
      } catch (error) {
        console.error(`Error loading ${filename}.md`, error);
        setHtmlContent("<p>Error loading content.</p>");
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [filename]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="contact" className="section content-background">
      <div className="container section-title">
        <h2>News</h2>
      </div>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </section>
  );
};

export default MarkdownPage;
