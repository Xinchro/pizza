const metalsmith = require("metalsmith")
const markdown = require("metalsmith-markdown")
const layouts = require("metalsmith-layouts")
const permalinks = require("metalsmith-permalinks")
const sass = require("metalsmith-sass")
const debug = require("metalsmith-debug")
const collections = require("metalsmith-collections")
const mdPartials = require('metalsmith-markdown-partials');

metalsmith(__dirname)
  .metadata({
    title: "Xinchro's styleguides",
    description: "Styleguides for various projects"
  })
  .source("./src/pages")
  .destination("./docs")
  .clean(true)
  .use(mdPartials({
    "libraryPath": './src/mdpartials/'
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: "handlebars",
    partials: "./src/partials",
    directory: "./src/layouts",
  }))
  .use(collections({
    projects: "./projects/*.md"
  }))
  .build(function(err, files) {
    console.log("\n---- Starting page build...")
    if (err) { throw err }
    for(file in files) {
      console.log(`Built: ${file}`)
    }
    console.log("Page build complete! ----")
  })

metalsmith(__dirname)
  .source("./src/scss")
  .destination("./docs")
  .use(sass({
    outputStyle: "expanded",
    outputDir: "./css"
  }))
  .build(function(err, files) {
    console.log("\n---- Starting styles build...")
    if (err) { throw err }
    for(file in files) {
      console.log(`Built: ${file}`)
    }
    console.log("Styles build complete! ----")
  })
