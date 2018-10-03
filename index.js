var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "Xinchro's styleguides",
    description: "Styleguides for various projects"
  })
  .source('./src/pages')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    directory: './src/layouts'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
