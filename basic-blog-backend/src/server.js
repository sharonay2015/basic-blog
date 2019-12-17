import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upvotes: 0,
    comments: [],
  },
  'learn-node': {
    upvotes: 0,
    comments: [],
  },
  'learn-budgeting': {
    upvotes: 0,
    comments: [],
  },
}

// create backend app
const app = express();

// parse json object, adds body property to request parameter t
app.use(bodyParser.json());

// define endpoints for app
app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;
  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!!!`)
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text });

  res.status(200).send(articlesInfo[articleName]);
});

// start server
app.listen(8000, () => console.log('Listening on port 8000'));
