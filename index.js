const css = require('css');

module.exports = function (source) {
  this.cacheable();

  const ast = css.parse(source);

  ast.stylesheet.rules.forEach(rule => {
    console.log('rule', rule);

    if (rule.type === 'rule' && rule.declarations && rule.declarations.length) {
      rule.declarations.forEach(declaration => {
        if (declaration.type === 'declaration') {
          console.log('processing', declaration.type);

          if (!declaration.value.endsWith('!important')) {
            declaration.value += ' !important';
          }
        } else {
          console.log('skipping', declaration.type);
        }
      });
    }
  });

  return css.stringify(ast);
};
