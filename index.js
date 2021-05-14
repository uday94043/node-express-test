const express = require('express');
const logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;
const wiki = require('./wiki');

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/wiki', wiki);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});