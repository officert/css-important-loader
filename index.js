const css = require('css');

module.exports = function (source) {
  this.cacheable();

  const ast = css.parse(source);

  ast.stylesheet.rules.forEach(rule => {
    if (rule.type === 'rule' && rule.declarations && rule.declarations.length) {
      rule.declarations.forEach(declaration => {
        if (declaration.type === 'declaration') {
          if (!declaration.value.endsWith('!important')) {
            declaration.value += ' !important';
          }
        }
      });
    }
  });

  return css.stringify(ast);
};
