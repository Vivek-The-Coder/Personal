
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['cG5ygXLBCAg9HNJjhKeS6c'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  