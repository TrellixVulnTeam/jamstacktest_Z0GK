
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

module.exports = function (config) {
    config.addPassthroughCopy("./main.js");
    config.addWatchTarget('./main.js');
    config.addPassthroughCopy("./assets/css/");
    config.addWatchTarget("./assets/css/");
    config.addPassthroughCopy("./assets/font-awesome-4.7.0/");
    config.addWatchTarget("./assets/font-awesome-4.7.0/");

    let options = {
        html: true,
        breaks: true,
        linkify: true
      };

    let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItContainer, "wrapper")
    .use(markdownItContainer, "see-jobs")
    .use(markdownItContainer, "see-jobs__p1")
    .use(markdownItContainer, "see-jobs__p2")
    .use(markdownItContainer, "see-jobs__link")
    .use(markdownItContainer, "click-here")
    .use(markdownItContainer, "map")
    .use(markdownItContainer, "case-study")
    .use(markdownItContainer, "case-study__contents")
    .use(markdownItContainer, "case-study__contents__info")
    .use(markdownItContainer, "case-study__contents__info__p1")
    .use(markdownItContainer, "case-study__contents__info__p2")
    .use(markdownItContainer, "case-study__contents__info__image")
    .use(markdownItContainer, "case-study__link");

    config.setLibrary("md", markdownLib);

    config.addFilter('markdown', function(value) {
        return markdownLib.render(value);
    });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html","njk","md"], 
        dir: {
            input: "src",
            output: "_site",
            include: "_includes"
        }
    }
}