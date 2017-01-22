module.exports = function (source) {
  this.cacheable();

  console.log('source', source);

  return source;
};
