const express = require('express');
const router = express.Router();

router.all('/', function (req, res, next) {
    console.log('fired a request in wiki..');
    next();
});

router.get('/', function (req, res) {
    res.send('Wiki home page');
});

router.get('/about', function (req, res) {
    res.send('Aboud this wiki')
});

module.exports = router;