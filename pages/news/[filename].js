import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const MarkdownPage = dynamic(() => import('@/views/MarkdownPage'), { ssr: false });

const NewsPage = () => {
  const router = useRouter();
  const { filename } = router.query;

  return <MarkdownPage filename={filename} />;
};

export default NewsPage;
