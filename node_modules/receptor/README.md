# receptor
Yes, it's another DOM event delegation toolkit! If you're new to event
delegation, here's the gist:

> Event delegation is a method for listening for events that bubble to
> a higher level in the DOM and applying a function only if the event's
> target meets some criteria (typically that it matches a given CSS
> selector). The primary advantage over adding event listeners to
> specific elements is that **you don't need to know what's in the DOM
> to listen for events from certain elements.** In other words, you can
> modify the DOM willy-nilly without having to juggle adding and
> removing "direct" event listeners whenever certain elements are
> added and removed.

There are [lots of different tools][other tools] that do delegation.
The technique is even baked into [jQuery](http://api.jquery.com/on/),
which behaves "correctly" in the sense that delegated functions match
CSS selectors both for the target element _and its ancestors_.

💥 The big difference between receptor and other tools is that it offers
**functional, declarative methods** for "routing" events via different
[selectors](#delegateAll) and [keyboard keys](#keymap),
[ignoring](#ignore) subtrees of the DOM, adding [one-off](#once)
listeners, and crafting reuseable [behaviors](#behavior).

## Installation

### Node
You can install receptor as a Node module with:

```sh
npm install receptor
```

In CommonJS environments, you may either require the module and access its
[API](#API) via properties:

```js
var receptor = require('receptor');
var click = receptor.delegate('click', 'button', function(e) {
  // ...
});
```

or you can require the top-level API methods directly, which can cut down on
your bundle size if you don't need the entire API:

```js
var behavior = require('receptor/behavior');
var delegateAll = require('receptor/delegateAll');
// etc.
```

### Browser
To use receptor in the browser, you can either bundle it with your CommonJS
tool of choice ([browserify], [webpack], etc.) or grab the browser-ready build
from the [dist directory](dist/).

## API

### <a name="delegate" href="#delegate">#</a> `receptor.delegate(selector, fn)`
Returns a delegated function that only calls the `fn` callback if
the event target matches the given CSS `selector`, _or if it is
contained by an element that does_. The callback is called with the
matching element as `this`.

**Why?** Because many delegation tools only handle the case in which
the event's `target` matches the given selector, which breaks down
as soon as you want to delegate to elements with children.

```html
<button>hi</button>
<button>hi <i>there</i></button>
<script>
document.body.addEventListener(
  'click',
  receptor.delegate('button', function(event) {
    console.log('clicked button:', this);
  })
);
</script>
```

### <a name="delegateAll" href="#delegateAll">#</a> `receptor.delegateAll(selectors)`
Returns a delegated function that treats each key in the `selectors`
map as a CSS selector to match _a la_ `receptor.delegate()`, and can either
delegate events to multiple callbacks with matching selectors or
short-circuit delegation to later selectors by returning `false`:

```html
<button>some button</button>
<button aria-controls="other">another button</button>
<script>
document.body.addEventListener(
  'click',
  receptor.delegateAll({
    'button[aria-controls]': function(event) {
      console.log('clicked controller:', this);
      return false; // no other delegates will be called
    },
    'button': function(event) {
      console.log('clicked other button:', this);
    }
  })
);
```

### <a name="ignore" href="#ignore">#</a> `receptor.ignore(element, callback)`
Returns a delegated function that only calls the `callback` if the
event's `target` isn't _contained_ by the provided `element`. This
is useful for creating event handlers that only fire if the user
interacts with something outside of a given UI element.

### <a name="once" href="#once">#</a> `receptor.once(callback [, options])`
Returns a wrapped function that removes itself as an event listener
as soon as it's called, then calls the `callback` function with the
same arugments. If you provide [listener options][addEventListener],
those will also be passed to `removeEventListener()`.

### <a name="keymap" href="#keymap">#</a> `receptor.keymap(keys)`
Returns a delegated function in which each key in the `keys` object
is treated as a [key name] or _combination_ with modifier keys:

```js
document.body.addEventListener('keydown', receptor.keymap({
  'ArrowLeft':        moveLeft,
  'ArrowRight':       moveRight,
  'Shift+ArrowLeft':  moveLeftMore,
  'Shift+ArrowRight': moveRightMore
}));
```

In other words, this is a more declarative alternative to a single
event handler with potentially messy key detection logic. Supported
modifier keys are <kbd>Alt</kbd>, <kbd>Control</kbd> (or
<kbd>Ctrl</kbd>), and <kbd>Shift</kbd>.

### <a name="behavior" href="#behavior">#</a> `receptor.behavior(listeners [, properties])`
Returns a _behavior_ object defined by one or more delegated
listeners, which exposes `add()` and `remove()` methods for
attaching and removing all delegates. Other `properties` will be
merged if provided.

Each key in `listeners` should be one of either:

1. One or more event types, such as `click`, `keydown`, or
   `mousedown touchstart` (multiple types are separated by spaces),
   in which case the value can either be a function or an object
   suitable for `receptor.delegateAll()`; or
1. A string in the form `types:delegate(selector)`, where `types` can
   be one or more event types separated with spaces, and `selector`
   is a CSS selector.

This is the primary building block for developing rich, declarative
interactions:

```html
<button role="menubutton" aria-controls="menu">toggle menu</button>
<menu id="menu" aria-hidden="true">
  <!-- stuff -->
</menu>
<script>
var MenuButton = receptor.behavior({
  'click': {
    '[role=menubutton]': function(event) {
      var pressed = MenuButton.toggle(this);
      if (pressed) {
        var close = MenuButton.getCloseListener(this);
        window.addEventListener('click', close);
      }
    }
  }
}, {
  toggle: function(button, pressed) {
    if (typeof pressed !== 'boolean') {
      pressed = button.getAttribute('aria-pressed') !== 'true';
    }
    button.setAttribute('aria-pressed', pressed);
    MenuButton.getMenu(button).setAttribute('aria-hidden', !pressed);
    return pressed;
  },

  getMenu: function(button) {
    var id = button.getAttribute('aria-controls');
    return document.getElementById(id);
  },

  getCloseListener: function(button) {
    return receptor.ignore(button, receptor.once(function() {
      MenuButton.toggle(button, false);
    }));
  }
});

// enable the interaction on any [role=menubutton]
MenuButton.add(document.body);
// later...
// MenuButton.remove(document.body);
</script>
```

[key name]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
[other tools]: https://www.npmjs.com/search?q=delegate
[addEventListener]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
[browserify]: http://browserify.org/
[webpack]: https://webpack.github.io/
