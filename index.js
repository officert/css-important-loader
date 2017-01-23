const css = require('css');

module.exports = function (source) {
  this.cacheable();

  const ast = css.parse(source);

  ast.stylesheet.rules.forEach(rule => {
    console.log('rule', rule);

    if (rule.type === 'rule' && rule.value) {
      console.log('rule before', rule.value);

      if (!rule.value.endsWith('!important')) {
        rule.value += ' !important';
      }

      console.log('rule after', rule.value);
    }
  });

  return css.stringify(ast);
};
