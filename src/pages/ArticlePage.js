import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find article from articles array that has the name that matches the name in the url
  const article = articleContent.find(article => article.name === name);

  if (!article) return <h1>Article does not exist</h1>

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
}

export default ArticlePage;