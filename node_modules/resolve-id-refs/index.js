'use strict';

var RE_TRIM = /(^\s+)|(\s+$)/g;
var RE_SPLIT = /\s+/;

var trim = String.prototype.trim
  ? function(str) { return str.trim(); }
  : function(str) { return str.replace(RE_TRIM, ''); };

var queryById = function(id) {
  return this.querySelector('[id="' + id.replace(/"/g, '\\"') + '"]');
};

module.exports = function resolveIds(ids, doc) {
  if (typeof ids !== 'string') {
    throw new Error('Expected a string but got ' + (typeof ids));
  }

  if (!doc) {
    doc = window.document;
  }

  var getElementById = doc.getElementById
    ? doc.getElementById.bind(doc)
    : queryById.bind(doc);

  ids = trim(ids).split(RE_SPLIT);

  // XXX we can short-circuit here because trimming and splitting a
  // string of just whitespace produces an array containing a single,
  // empty string
  if (ids.length === 1 && ids[0] === '') {
    return [];
  }

  return ids
    .map(function(id) {
      var el = getElementById(id);
      if (!el) {
        throw new Error('no element with id: "' + id + '"');
      }
      return el;
    });
};
