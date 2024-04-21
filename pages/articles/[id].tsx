// pages/articles/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import AboutArticle from '../about';
import Link from 'next/link';

const ArticleDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Article Detail</h1>
      <p>Article ID: {id}</p>
      <AboutArticle id={id as string} />
      <Link href="/">
      <span>retour</span>
      </Link>
      
    </div>
  );
};

export default ArticleDetail;
