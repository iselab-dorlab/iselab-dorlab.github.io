import React from "react";
// import dynamic from 'next/dynamic';
// const MarkdownPage = dynamic(() => import('@/views/MarkdownPage'), { ssr: true });
import MarkdownPage from "@/views/MarkdownPage";

const NewsPage = () => {
  return <MarkdownPage />;
};
export default NewsPage;

export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: ["/news/tuyenthanhvien", "/news/template", "/news/article1"], // TODO: Add more paths to list all news
    fallback: true,
  };
};
