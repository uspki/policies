
const assert = require('assert');
const jsdom = require('jsdom-global');

var cleanup = jsdom();
const delegateAll = require('../../delegateAll');
cleanup();

beforeEach(function() {
  cleanup = jsdom();
});

afterEach(function() {
  cleanup();
});

describe('delegateAll({selector: function})', function() {

  it('delegates to the target', function(done) {
    document.body.innerHTML = '<div><a>foo</a></div>';
    var link = document.querySelector('a');
    var listener = delegateAll({
      'a': function(e) {
        assert.strictEqual(this, link);
      },
      'b': function(e) {
        assert.ok(false, 'this listener should not fire');
      }
    });
    document.body.addEventListener('click', listener);
    link.click();
    document.body.removeEventListener('click', listener);
    process.nextTick(done);
  });

});

describe('delegateAll() with multiple selectors', function() {

  it('delegates to multiple callbacks', function(done) {
    document.body.innerHTML = '<div><a>foo <b>bar</b></a></div>';
    var values = [];
    var listener = delegateAll({
      'a': function() {
        values.push(this.nodeName);
      },
      'b': function(e) {
        values.push(this.nodeName);
      }
    });
    document.body.addEventListener('click', listener);
    document.querySelector('b').click();
    document.body.removeEventListener('click', listener);
    process.nextTick(function() {
      assert.deepEqual(values, ['A', 'B']);
      done();
    });
  });

  it('short-circuits when one callback returns false', function(done) {
    document.body.innerHTML = '<div><a>foo <b>bar</b></a></div>';
    var values = [];
    var listener = delegateAll({
      'a': function() {
        values.push(this.nodeName);
        return false;
      },
      'b': function(e) {
        values.push(this.nodeName);
      }
    });
    document.body.addEventListener('click', listener);
    document.querySelector('b').click();
    document.body.removeEventListener('click', listener);
    process.nextTick(function() {
      assert.deepEqual(values, ['A']);
      done();
    });
  });

});
