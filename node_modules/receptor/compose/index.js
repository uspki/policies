module.exports = function compose(functions) {
  return function(e) {
    return functions.some(function(fn) {
      return fn.call(this, e) === false;
    }, this);
  };
};
