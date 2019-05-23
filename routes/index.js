var express = require('express');
var router = express.Router();
const fs = require('fs-extra');
const md = require('markdown-it')();
const linkifyHtml = require('linkifyjs/html');

router.get('/about-page', function(req, res) {
    fs.readFile('./public/content/about-page/index.md', 'utf8')
        .then((data) => md.render(data))
        .then((html) => linkifyHtml(html))
        .then((html_linked) => res.render('index', { message: html_linked }))
        .catch(() => res.render('error', { message: 'sorry there is an error'}));
});

router.get('/jobs', function(req, res) {
    fs.readFile('./public/content/jobs/index.md', 'utf8')
        .then((data) => md.render(data))
        .then((html) => linkifyHtml(html))
        .then((html_linked) => res.render('index', { message: html_linked }))
        .catch(() => res.render('error', { message: 'sorry there is an error'}));
});

router.get('/valves', function(req, res) {
    fs.readFile('./public/content/valves/index.md', 'utf8')
        .then((data) => md.render(data))
        .then((html) => linkifyHtml(html))
        .then((html_linked) => res.render('index', { message: html_linked }))
        .catch(() => res.render('error', { message: 'sorry there is an error'}));
});
module.exports = router;
