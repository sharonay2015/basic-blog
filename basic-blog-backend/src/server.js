import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

// create backend app
const app = express();

// parse json object, adds body property to request parameter t
app.use(bodyParser.json());

// callback
app.get('/api/articles/:name', async (req, res) => {
  try {
    const articleName = req.params.name;

    // connect to local database, return promise
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
    // specify database to query 
    const db = client.db('basic-blog');

    // query db, 
    const articleInfo = await db.collection('articles').findOne({ name: articleName })
    // response from the db
    res.status(200).json(articleInfo);

    // close db connection
    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error });
  }
})

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
