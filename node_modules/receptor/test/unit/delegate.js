const assert = require('assert');
const jsdom = require('jsdom-global');

var cleanup = jsdom();
const delegate = require('../../delegate');
cleanup();

beforeEach(function() {
  cleanup = jsdom();
});

afterEach(function() {
  cleanup();
});

describe('delegate(selector, function)', function() {

  it('delegates to the target', function() {
    document.body.innerHTML = '<div><a>foo</a></div>';
    var link = document.querySelector('a');
    var listener = delegate('a', function(e) {
      assert.strictEqual(this, link);
      done();
    });
    document.body.addEventListener('click', listener);
    link.click();
    document.body.removeEventListener('click', listener);
  });

  it('delegates to the ancestor', function() {
    document.body.innerHTML = '<div><a>foo <b>bar</b></a></div>';
    var link = document.querySelector('a');
    var listener = delegate('a', function(e) {
      assert.strictEqual(this, link);
      done();
    });
    document.body.addEventListener('click', listener);
    document.querySelector('b').click();
    document.body.removeEventListener('click', listener);
  });

  it('does not call the handler if no match is found', function(done) {
    document.body.innerHTML = '<div><a>foo <b>bar</b></a></div>';
    var link = document.querySelector('a');
    var listener = delegate('section', function(e) {
      assert.ok(false, 'this should not happen');
    });
    document.body.addEventListener('click', listener);
    document.querySelector('b').click();
    document.body.removeEventListener('click', listener);
    process.nextTick(done);
  });

});
