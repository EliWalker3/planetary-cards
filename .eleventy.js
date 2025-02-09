
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("planets", function(planet, name, description) {
    return `<div class="card ${planet}">
    <div class="circle"></div>
    <h3>${name}</h3>
    <p>${description}</p>
</div>`;
  });
};