import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const MarkdownPage = () => {
    const { filename } = useParams();
    const [content, setContent] = useState('');
  
    useEffect(() => {
      fetch(`assets/news/${filename}.md`)
        .then((response) => response.text())
        .then((text) => setContent(text));
    }, [filename]);

    return (
        <section id="contact" className="section content-background">
            <div className="container section-title">
                <h2>News</h2>
            </div>

            <div className='container'>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </section>
    );
};

export default MarkdownPage;
