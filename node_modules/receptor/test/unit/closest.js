const assert = require('assert');
const jsdom = require('jsdom-global');

var cleanup = jsdom();
const closest = require('../../closest');
cleanup();

beforeEach(function() {
  cleanup = jsdom();
});

afterEach(function() {
  cleanup();
});

describe('closest(element, selector)', function() {

  it('matches the target', function() {
    document.body.innerHTML = '<div><a>foo</a></div>';
    var target = document.querySelector('a');
    assert.strictEqual(closest(target, 'a'), target);
  });

  it('matches an ancestor', function() {
    document.body.innerHTML = '<div><a>foo</a></div>';
    var target = document.querySelector('a');
    var div = document.querySelector('div');
    assert.strictEqual(closest(target, 'div'), div);
  });

  it('bails when it reaches the Document', function() {
    document.body.innerHTML = '<div><a>foo</a></div>';
    var target = document.querySelector('a');
    var div = document.querySelector('div');
    assert.strictEqual(closest(target, '[hidden]'), undefined);
  });

});
