const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/classic': { page: '/classic' },
      '/kinda-big': { page: '/kinda-big' },
      '/kinda-big-better': { page: '/kinda-big-better' },
      '/optimized': { page: '/optimized' },
    };
  },
});
