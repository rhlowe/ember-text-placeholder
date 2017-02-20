[![Ember Observer Score](https://emberobserver.com/badges/ember-text-placeholder.svg)](https://emberobserver.com/addons/ember-text-placeholder)

# ember-text-placeholder

The goal of `ember-text-placeholder` is to provide a mechanism for placing placeholder text while an app loads. The effect is inspired by Facebook.

![Inspiration](http://i.imgur.com/ohxK0Gu.png)

## Usage

### `{{text-placeholder}}`

The default usage is `{{text-placeholder}}`. This uses the unicode [Upper Half Block](http://unicode-table.com/en/2580/) (▀) and a [Zero Width Space](http://unicode-table.com/en/200B/) to create a solid line that text wraps.

`{{text-placeholder}}` supports a `width` property which may be a string [short|medium|long], or a number.

size parameter as string: `{{text-placeholder size='long'}}`

size parameter as number: `{{text-placeholder size=25}}`

Also supports a `varLength` boolean property. If true, the `size` parameter functions as max-size and the string length is random. When using `varLength`, you may also use `min` to specify the shortest the random string length can be.

varLength parameter: `{{text-placeholder size='long' varLength=true}}`

You can override the default character array by passing the array helper to `characters`, `{{text-placeholder varLength=true characters=(array "🙌" " ")}}`. The final length of the string is determined by recursively joining the `characters` array a `size` number of times.

### {{rect-placeholder}}

default usage: `{{rect-placeholder}}`

with `height` and `width` properties: `{{rect-placeholder height=25 width=100}}`

with `radiusX` and `radiusY` properties: `{{rect-placeholder radiusX=20 radiusY=20}}`

`height`, `width`, `radiusX`, and `radiusY` are all measured in pixels.

### Styles

```css
.TextPlaceholder {
  animation: ScrollingBackground 3s linear infinite;
  background: linear-gradient(270deg, #333 0%, #999 20%, #333 40%, #999 60%, #333 80%, #999 100%);
  -webkit-background-clip: text;
  background-size: 500% 100%;
  font-family: monospace;
  -webkit-text-fill-color: transparent;
}
@keyframes ScrollingBackground {
  0% { background-position:100% 50%; }
  100% { background-position:0% 50%; }
}
```


## Installation

To use as an addon

* `ember install ember-text-placeholder`

To dev or run tests

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
