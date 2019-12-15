import React from 'react';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find article from articles array that has the name that matches the name in the url
  const article = articleContent.find(article => article.name === name);

  if (!article) return <NotFoundPage />

  // include all the articles in the list except the one currently selected 
  const otherArticles = articleContent.filter(article => article.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      {/* display related articles list */}
      <ArticleList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;