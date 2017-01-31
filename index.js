const css = require('css');

function processRule(rule) {
  if (!rule || !rule.declarations || !rule.declarations.length) return null;

  rule.declarations.forEach(declaration => {
    if (declaration.type === 'declaration') {
      if (!declaration.value.endsWith('!important')) {
        declaration.value += ' !important';
      }
    }
  });
}

function processMediaQuery(rule) {
  if (!rule || !rule.rules || !rule.rules.length) return null;

  rule.rules.forEach(processRule);
}

module.exports = function (source) {
  this.cacheable();

  const ast = css.parse(source);

  if (!ast || !ast.stylesheet || !ast.stylesheet.rules || !ast.stylesheet.rules.length) throw new Error('error parsing css');

  ast.stylesheet.rules.forEach(rule => {
    if (rule.type === 'rule') {
      processRule(rule);
    } else if (rule.type === 'media') {
      processMediaQuery(rule);
    }
  });

  return css.stringify(ast);
};
