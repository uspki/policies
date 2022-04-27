const assert = require('assert');
const jsdom = require('jsdom-global');

var cleanup = jsdom();
const behavior = require('../../behavior');
cleanup();

beforeEach(function() {
  cleanup = jsdom();
});

afterEach(function() {
  cleanup();
});

describe('behavior({event: function})', function() {

  it('adds and removes', function() {
    var target = document.body;
    target.innerHTML = '<button>hi</button>';
    var times = 0;
    var b = behavior({'click': function(e) {
      times++;
    }});
    b.add(target);
    target.click();
    b.remove(target);
    target.click();
    b.add(target);
    target.click();
    b.remove(target);
    target.click();
    assert.equal(times, 2);
  });

});

describe('behavior({"event1 event2": function})', function() {

  it('adds multiple event type listeners', function() {
    document.body.innerHTML = '<button>hi</button>';
    var target = document.querySelector('button');
    var times = 0;
    var b = behavior({'click focus': function(e) {
      times++;
    }});
    b.add(target);
    target.click();
    target.focus();
    b.remove(target);
    target.click();
    target.focus();
    b.add(target);
    target.click();
    target.focus();
    b.remove(target);
    target.click();
    target.focus();
    assert.equal(times, 4);
  });

});

describe('behavior({event: {selector: function}})', function() {

  it('adds and removes', function() {
    var target = document.body;
    target.innerHTML = '<h1>yo</h1> <button>hi <i>there</i></button>';
    var times = 0;
    var b = behavior({
      'click': {
        'button': function(e) {
          times++;
        }
      }
    });
    b.add(target);
    target.click();
    target.querySelector('button').click();
    target.querySelector('i').click();
    b.remove(target);
    target.click();
    assert.equal(times, 2);
  });

});

describe('behavior({"event:delegate(selector)": callback}', function() {

  it('adds and removes', function() {
    var target = document.body;
    target.innerHTML = '<h1>yo</h1> <button>hi <i>there</i></button>';
    var times = 0;
    var b = behavior({
      'click:delegate(button)': function(e) {
        times++;
      }
    });
    b.add(target);
    target.click();
    target.querySelector('button').click();
    target.querySelector('i').click();
    b.remove(target);
    target.click();
    assert.equal(times, 2);
  });

  it('adds and removes multiple event type listeners', function() {
    document.body.innerHTML = '<h1>yo</h1> <button>hi <i>there</i></button>';
    var target = document.querySelector('button');
    var times = 0;
    var b = behavior({
      'click focus:delegate(button)': function(e) {
        times++;
      }
    });
    b.add(target);
    target.click();
    target.focus();
    b.remove(target);
    target.click();
    target.focus();
    assert.equal(times, 2);
  });

});

xdescribe('behavior options', function() {

  describe('behavior({event: {"*": function, ...options}})', function() {

    it('obeys the "capture" option', function() {
    });

    it('obeys the "passive" option', function() {
    });

  });

  describe('behavior({"event:delegate(selector)": {"*": callback, ...options})', function() {

    it('obeys the "capture" option', function() {
    });

    it('obeys the "passive" option', function() {
    });

  });

});
