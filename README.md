# sjson

[![Build Status](https://travis-ci.org/odino/node-sjson.svg?branch=master)](https://travis-ci.org/odino/node-sjson)

> Parsing JSON without raising your voice

I got tired of writing my `JSON.parse(...)`
in `try...catch` blocks to prevent wrong inputs
to raise an exception, so this is the poor man's
solution to do it without too much fuss.

## Installation

```
npm install sjson
```

## Usage

``` javascript
var sjson = require('node-sjson')

sjson('{"a":1}') // {a: 1}
sjson('{"a":...--') // undefined
sjson('{"a":...--', 'fallback value') // 'fallback value'
```

## Tests

Simply run `npm test` in the root of the repo.
