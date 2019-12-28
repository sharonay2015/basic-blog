import React, { useState } from 'react';

// form to input comments
const AddCommentForm = ({ articleName, setArticleInfo }) => {

  // useState react hook to define state variables
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  // async function that's triggered by button click to send request to server
  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    // result contains the updated version of article info
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  }
  return (
    <div id="add-comment-form">
      {/* input for name */}
      <label>
        Name:
        {/* value prop links state to the text field */}
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>

      {/* commment text input */}
      <label>
        Comment:
        <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
      </label>
      {/* button to submit form */}
      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  )
};

export default AddCommentForm;