import express from 'express';

// create backend app
const app = express();

// define endpoints for app
app.get('/hello', (req, res) => res.send('Hey Yall!!'));

// start server
app.listen(8000, () => console.log('Listening on port 8000'));
