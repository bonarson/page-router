// pages/about.tsx
import React from 'react';

interface AboutArticleProps {
  id: string;
}

const AboutArticle: React.FC<AboutArticleProps> = ({ id }) => {
  return (
    <div>
      <h1>About Article numero : {id}</h1>
      <p>It's a good article!</p>
    </div>
  );
};

export default AboutArticle;
