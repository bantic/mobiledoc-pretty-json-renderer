var assert = require('chai').assert;
var formatMobiledoc = require('../index.js');

describe('#formatMobiledoc', function() {
  it('formats null mobiledocs', function() {
    assert.equal(formatMobiledoc(null), 'null');
    assert.equal(formatMobiledoc(''), '""');
  });

  it('formats things in a way that is easy to read', function() {
    var doc = {
      version: "0.3.0",
      markups: [
        ["b"],
        ["i"],
        ["a", ["href", "http://google.com", "target", "_blank"]]
      ],
      atoms: [
        ["mention", "@bob", {
          id: 42
        }],
        ["mention", "@tom", {
          id: 12
        }]
      ],
      cards: [
        ['image', {
          src: 'http://google.com/logo.png'
        }]
      ],
      sections: [
        [1, "h2", [
          [0, [], 0, "Simple h2 example"],
        ]],
        [1, "p", [
          [0, [], 0, "Example with no markup"],
          [0, [0, 1], 1, "Bold left open, italic wrapped & closed"],
          [0, [], 1, "Some leftover bold, closes"],
          [0, [], 1, "Example closing i tag (no opened markups, 1 closed markup)"],
          [1, [], 0, 0],
          [1, [0], 1, 1]
        ]],
        [10, 0]
      ]
    };

    var expected =
`{
  "version": "0.3.0",
  "markups": [
    ["b"],
    ["i"],
    ["a", ["href", "http://google.com", "target", "_blank"]]
  ],
  "atoms": [
    ["mention", "@bob", {
      "id": 42
    }],
    ["mention", "@tom", {
      "id": 12
    }]
  ],
  "cards": [
    ["image", {
      "src": "http://google.com/logo.png"
    }]
  ],
  "sections": [
    [1, "h2", [
      [0, [], 0, "Simple h2 example"]
    ]],
    [1, "p", [
      [0, [], 0, "Example with no markup"],
      [0, [0, 1], 1, "Bold left open, italic wrapped & closed"],
      [0, [], 1, "Some leftover bold, closes"],
      [0, [], 1, "Example closing i tag (no opened markups, 1 closed markup)"],
      [1, [], 0, 0],
      [1, [0], 1, 1]
    ]],
    [10, 0]
  ]
}`;

    assert.equal(formatMobiledoc(doc), expected);
  });
});

