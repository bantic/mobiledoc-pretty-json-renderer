# mobiledoc-pretty-json-renderer

A pretty JSON formatter for
[Mobiledoc](https://github.com/bustlelabs/mobiledoc-kit/blob/master/MOBILEDOC.md)
documents.

Because of all the nested arrays, a dumb JSON pretty-printer gives
something pretty difficult to read:
```js
{
  "version": "0.3.0",
  "atoms": [],
  "markups": [],
  "cards": [],
  "sections": [
    [
      1,
      "H2",
      [
        [
          0,
          [],
          0,
          "Hello World"
        ]
      ]
    ],
    [
      1,
      "p",
      [
        [
          0,
          [],
          0,
          "This is Mobiledoc-kit."
        ]
      ]
    ]
  ]
}
```

This formatter produces a nicer structure:
```js
{
  "version": "0.3.0",
  "markups": [],
  "atoms": [],
  "cards": [],
  "sections": [
    [1, "H2", [
      [0, [], 0, "Hello World"]
    ]],
    [1, "p", [
      [0, [], 0, "This is Mobiledoc-kit."]
    ]]
  ]
}
```

## Usage
* `npm install -S mobiledoc-pretty-json-renderer`

```js
var formatMobiledoc = require('mobiledoc-pretty-json-renderer');
console.log(formatMobiledoc(someMobiledoc));
```
