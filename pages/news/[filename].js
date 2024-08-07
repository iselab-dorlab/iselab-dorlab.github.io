import React from "react";
import dynamic from 'next/dynamic';
const MarkdownPage = dynamic(() => import('@/views/MarkdownPage'), { ssr: false });

const NewPage = () => {
  return <MarkdownPage />;
};
export default NewPage;
