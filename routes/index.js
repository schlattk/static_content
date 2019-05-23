var express = require('express');
var router = express.Router();
const fs = require('fs-extra');
const showdown  = require('showdown');
const converter = new showdown.Converter();

/* GET home page. */
router.get('/about-page', function(req, res) {
    fs.readFile('./public/content/valves/index.md', 'utf8')
        .then((data) => converter.makeHtml(data))
        .then((html) => res.render('index', { message: html }));
});

module.exports = router;
