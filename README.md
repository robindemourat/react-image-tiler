# Image Tiler

![screencast](https://github.com/mike-douglas/react-image-tiler/raw/master/kittens.gif)

Image tiler is a [React][react] component that displays images in a responsive, tiled layout.

## Installation

```bash
$ npm install react-image-tiler
```

## Configuration

The `Tiler` component has the following properties:

- `images` - an array of image URLs to display
- `minWidth` - the minimum width of an image

## Use

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Tiler from 'react-image-tiler'

images = [
    'http://placekitten.com/300/300',
    'http://placekitten.com/300/300',
    'http://placekitten.com/300/300',
    'http://placekitten.com/300/300',
]

ReactDOM.render(<Tiler images={images} minWidth="200" />)
```

## Example

See `example/index.html`.

## Other stuff

This also includes a very simple `InstagramFeed` class that makes it easy to pull a public feed of images from someone's Instagram account. It's used in the `example/index.jsx` example, and also on [my website](http://directive.io)

## Development

```bash
$ webpack-dev-server --content-base example/
```

[react]: https://facebook.github.io/react/
