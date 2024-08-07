import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { marked } from 'marked'; // Named import

const MarkdownPage = () => {
  const { filename } = useParams();
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/assets/news/${filename}.md`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const text = await response.text();
        // Remove front matter if it exists
        const frontMatterRegex = /^---\s*[\s\S]*?\s*---\s*/;
        const contentWithoutFrontMatter = text.replace(frontMatterRegex, '');
        // Convert Markdown to HTML
        const html = marked(contentWithoutFrontMatter);
        setHtmlContent(html);
      } catch (error) {
        console.log('error', error)
        console.error(`Error loading ${filename}.md`, error);
        setHtmlContent('<p>Error loading content.</p>');
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
