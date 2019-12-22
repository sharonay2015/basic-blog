import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find article from articles array that has the name that matches the name in the url
  const article = articleContent.find(article => article.name === name);

  // hook to keep track of state
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  // test useEffect
  useEffect(() => {
    setArticleInfo({ upvotes: 3 })
  })

  // hook to load article info

  if (!article) return <NotFoundPage />

  // include all the articles in the list except the one currently selected 
  const otherArticles = articleContent.filter(article => article.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times </p>
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