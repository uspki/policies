const assert = require('assert');
const jsdom = require('jsdom-global');

const ignore = require('../../ignore');

beforeEach(function() {
  cleanup = jsdom();
});

afterEach(function() {
  cleanup();
});

describe('ignore(element, function)', function() {

  it('ignores the target', function() {
    document.body.innerHTML = '<button>hi</button><div><a>foo</a></div>';
    var target = document.querySelector('div');
    var times = 0;
    var listener = ignore(target, function(e) {
      times++;
    });
    document.body.addEventListener('click', listener);
    ['body', 'button', 'a', 'div'].forEach(function(selector) {
      document.querySelector(selector).click();
    });
    assert.equal(times, 2);
    document.body.removeEventListener('click', listener);
  });

});
