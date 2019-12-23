import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import CommentList from '../components/CommentList';
import Upvotes from '../components/Upvotes';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find article from articles array that has the name that matches the name in the url
  const article = articleContent.find(article => article.name === name);

  // hook to keep track of state, sends request to
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      // get result body
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData();
    // setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) })
  }, [name]);

  // hook to load article info, makes request to backend

  if (!article) return <NotFoundPage />

  // include all the articles in the list except the one currently selected 
  const otherArticles = articleContent.filter(article => article.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      <Upvotes articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      {/* display related articles list */}
      <ArticleList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;