const css = require('css');

module.exports = function (source) {
  this.cacheable();

  const ast = css.parse(source);

  return css.stringify(ast);
};
