var assert = require('chai').assert;
var docs = require('./example-docs');

var formatMobiledoc = require('../index.js');

// detects invalid JSON - detects unquoted keys, single quoted strings, injected keys or values
function properJSON(doc, assert) {
  assert.deepEqual(JSON.parse(formatMobiledoc(doc)), doc);
}

// detects things like trailing commas, accidentally quoted numbers
function charwiseEqualish(doc, assert) {
  var actual = formatMobiledoc(doc).replace(/\s/g, '');
  var expected = JSON.stringify(doc).replace(/\s/g, '');
  assert.equal(actual, expected);
}

describe('Consistency tests - it properly serializes to valid JSON', function() {
  for (var key in docs) {
    it(`formatMobiledoc cleanly formats the ${key} demo mobiledoc`, function() {
      var doc = docs[key];
      properJSON(doc, assert);
      charwiseEqualish(doc, assert);
    });
  }
});
