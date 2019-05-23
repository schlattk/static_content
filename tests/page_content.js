import { Selector } from 'testcafe';
const fs = require('fs-extra');
const showdown  = require('showdown');
const converter = new showdown.Converter();

fixture `About-Page`

    .page `http://localhost:3000/acme/about-page`
    .before(async ctx  => {
        fs.readFile('./public/content/about-page/index.md', 'utf8')
            .then((data) => converter.makeHtml(data))
            .then(function (html) { ctx.text = html; } );
    });

test( 'test the contents of the about-page', async t => {
    const contents = Selector('body').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });
    await t
        .expect(contents.innerHTML).contains(t.fixtureCtx.text);
});

fixture `Jobs-Page`

    .page `http://localhost:3000/acme/jobs`
    .before(async ctx  => {
        fs.readFile('./public/content/jobs/index.md', 'utf8')
            .then((data) => converter.makeHtml(data))
            .then(function (html) { ctx.text = html; } );
    });

test( 'test the contents of the jobs-page', async t => {
    const contents = Selector('body').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });
    await t
        .expect(contents.innerHTML).contains(t.fixtureCtx.text);
});

fixture `Valves-Page`

    .page `http://localhost:3000/acme/valves`
    .before(async ctx  => {
        fs.readFile('./public/content/valves/index.md', 'utf8')
            .then((data) => converter.makeHtml(data))
            .then(function (html) { ctx.text = html; } );
    });

test( 'test the contents of the valves-page', async t => {
    const contents = Selector('body').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });
    await t
        .expect(contents.innerHTML).contains(t.fixtureCtx.text);
});
