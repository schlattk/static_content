import { Selector } from 'testcafe';
const fs = require('fs-extra');
// const showdown  = require('showdown');
// const converter = new showdown.Converter();
const md = require('markdown-it')();
const linkifyHtml = require('linkifyjs/html');

fixture `About-Page`

    .page `http://localhost:3000/about-page`
    .before(async ctx  => {
        fs.readFile('./public/content/about-page/index.md', 'utf8')
            .then((data) => md.render(data))
            .then((html) => linkifyHtml(html))
            .then(function (html_linked) { ctx.text = html_linked; } );
    });

test( 'test the contents of the about-page', async t => {
    const contents = Selector('body').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });
    await t
        .expect(contents.innerHTML).contains(t.fixtureCtx.text);
});

fixture `Jobs-Page`

    .page `http://localhost:3000/jobs`
    .before(async ctx  => {
        fs.readFile('./public/content/jobs/index.md', 'utf8')
            .then((data) => md.render(data))
            .then((html) => linkifyHtml(html))
            .then(function (html_linked) { ctx.text = html_linked; } );
    });

test( 'test the contents of the jobs-page', async t => {
    const contents = Selector('body').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });
    await t
        .expect(contents.innerHTML).contains(t.fixtureCtx.text);
});

fixture `Valves-Page`

    .page `http://localhost:3000/valves`
    .before(async ctx  => {
        fs.readFile('./public/content/valves/index.md', 'utf8')
            .then((data) => md.render(data))
            .then((html) => linkifyHtml(html))
            .then(function (html_linked) { ctx.text = html_linked; } );
    });

test( 'test the contents of the valves-page', async t => {
    const contents = Selector('body').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });
    await t
        .expect(contents.innerHTML).contains(t.fixtureCtx.text);
});
