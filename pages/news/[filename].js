import React from "react";
import dynamic from 'next/dynamic';
const MarkdownPage = dynamic(() => import('@/views/MarkdownPage'), { ssr: false });

const NewsPage = () => {
  return <MarkdownPage />;
};
export default NewsPage;
