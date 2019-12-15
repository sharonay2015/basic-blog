import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
  <>
    {/* Display a list of articles */}
    {articles.map((article, key) => (
      // Make each title a clickable link
      <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        {/* show a snippet of the article */}
        <p>{article.content[0].substring(0, 150)}. . .</p>
      </Link>
    ))}
  </>
);

export default ArticleList;