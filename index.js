const css = require('css');

module.exports = function (source) {
  this.cacheable();

  const ast = css.parse(source);

  ast.stylesheet.rules.forEach(rule => {
    console.log('rule', rule);

    if (rule.type === 'rule' && rule.declarations && rule.declarations.length) {
      rule.declarations.forEach(declaration => {
        if (declaration.type === 'declaration') {
          console.log('declaration before', declaration.value);

          if (!declaration.value.endsWith('!important')) {
            declaration.value += ' !important';
          }

          console.log('declaration after', declaration.value);
        }
      });
    }
  });

  return css.stringify(ast);
};
