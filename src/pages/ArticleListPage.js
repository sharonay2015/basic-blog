import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './article-content';

const ArticleListPage = () => (
  <>
    <h1>Articles</h1>
    {/* Display a list of articles */}
    {articleContent.map((article, key) => (
      // Make each title a clickable link
      <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        {/* show a snippet of the article */}
        <p>{article.content[0].substring(0, 150)}. . .</p>
      </Link>
    ))}
  </>
);

export default ArticleListPage;