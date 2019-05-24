# Static Content challenge

# Solution in Node js

* clone the repo
* cd static_content
* npm install
* npm start to start the application on localhost:3000
* npm test to run the 200 and 404 request tests (with Jest/Supertest)
* npm run ui to run the tests with Testcafe comparing the generated html with the one on the page  (the server needs to run for Testcafe to work and it needs a Chrome browser).
* all tests should be passing
* for the md/html conversion I used Markdown-it and Linkify libraries


The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.

This repository contains a `template.html` template file and a `content` folder with sub-folders containing `index.md` markdown files.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.
