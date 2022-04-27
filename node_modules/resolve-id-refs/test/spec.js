const refs = require('../');
const assert = require('assert');

describe('reference list', function() {

  beforeEach(function() {
    document.body.innerHTML = [
      '<div id="foo"></div>',
      '<div id="bar"></div>',
    ].join('\n');
  });

  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('gets a single element', function() {
    assert.deepEqual(
      refs('foo'),
      [
        document.getElementById('foo'),
      ]
    );
  });

  it('gets multiple elements', function() {
    assert.deepEqual(
      refs('foo bar'),
      [
        document.getElementById('foo'),
        document.getElementById('bar'),
      ]
    );
  });

  it('throws an error for missing elements', function() {
    assert.throws(() => refs('baz'));
    assert.throws(() => refs('foo bar baz'));
  });

  it('trims whitespace from around the list', function() {
    assert.deepEqual(
      refs(' foo bar \n '),
      [
        document.getElementById('foo'),
        document.getElementById('bar'),
      ]
    );
  });

  it('splits ids on any whitespace', function() {
    assert.deepEqual(
      refs('foo \n\t bar'),
      [
        document.getElementById('foo'),
        document.getElementById('bar'),
      ]
    );
  });

  describe('returns an empty array for...', function() {
    it('an empty string', function() {
      assert.equal(refs('').length, 0);
    });
    it('a string containing only whitespace', function() {
      assert.equal(refs(' \t\n ').length, 0);
    });
  });

  describe('it throws an error for...', function() {
    it('null', function() {
      assert.throws(() => refs(null));
    });
    it('undefined', function() {
      assert.throws(() => refs(undefined));
      assert.throws(() => refs());
    });
    it('numbers', function() {
      assert.throws(() => refs(0));
      assert.throws(() => refs(1));
    });
    it('objects and arrays', function() {
      assert.throws(() => refs({}));
      assert.throws(() => refs([]));
    });
  });

  it('can resolve ids in a document fragment', function() {
    const fragment = document.createDocumentFragment();
    const elements = ['baz', 'qux'].map(id => {
      const el = fragment.appendChild(document.createElement('div'));
      el.id = id;
      return el;
    });
    assert.deepEqual(
      refs('baz qux', fragment),
      elements
    );
  });

});
