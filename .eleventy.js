module.exports = function(config) {
  // Passthrough copy
  config.addPassthroughCopy('source/assets');
  config.addPassthroughCopy('source/images');
  config.addPassthroughCopy('source/LICENSE.txt');
  config.addPassthroughCopy('source/robots.txt');
  config.addPassthroughCopy('source/CNAME');

  return {
    dir: {
      input: 'source',
      output: 'dist'
    },
    templateFormats: [
      'md',
      'njk',
    ],
  };
};
