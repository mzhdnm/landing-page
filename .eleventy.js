module.exports = function(config) {
  // Passthrough copy
  config.addPassthroughCopy('source/assets');
  config.addPassthroughCopy('source/images');
  config.addPassthroughCopy('LICENSE.txt');
  config.addPassthroughCopy('robots.txt');

  return {
    dir: {
      input: 'source',
      output: 'dist'
    },
    templateFormats: [
      'md',
      'njk',
    ],
    passthroughFileCopy: true
  };
};
