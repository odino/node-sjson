var assert = require("assert")
var sjson  = require('./index')

describe('sjson', function() {
  describe('()', function () {
    it('should return a json object if it can parse', function () {
      assert.equal("hello", sjson('{"a":"hello"}').a);
      assert(sjson('{"a":"hello"}'));
    });

    it('should return undefined if we dont have a valid JSON souce', function () {
      assert(undefined == sjson('hello'));
    });

    it('should return a fallback value if we dont have a valid JSON souce  and a default value is specified', function () {
      assert.equal('fallback', sjson('hello', 'fallback'));
    });
  });
});
