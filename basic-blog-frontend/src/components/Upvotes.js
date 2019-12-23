import React from 'react';

// button to add an upvote

const Upvotes = ({ articleName, upvotes, setArticleInfo }) => {

  // function to take care of fetching logic
  const upvoteArticle = async () => {
    // POST request
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    });
    // body of response
    const body = await result.json();
    // update article info state
    setArticleInfo(body);
  }
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times </p>
    </div>
  );
}

export default Upvotes;