module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("tagsList", function(collectionApi) {
      const tagsList = new Set();
      collectionApi.getAll().map( item => {
          if (item.data.tags) { // handle pages that don't have tags
              item.data.tags.map( tag => tagsList.add(tag))
          }
      });
      return tagsList;
  });
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('admin')
    eleventyConfig.addPassthroughCopy('css')
    // return {
    //   passthroughFileCopy: true
    // }
  
    const {
      DateTime
    } = require("luxon");
  
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
      eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
          zone: 'utc'
        }).toFormat('yy-MM-dd');
      });
  
      eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat("MMMM dd, yyyy");
    });
  
  };
  