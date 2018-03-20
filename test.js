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

    it('should throw an error if the fallback value is of type Error', function () {
      class CustomError extends Error {}

      try {
        assert.equal('fallback', sjson('hello', new CustomError('123')));
        assert.fail("exception expected but not raised")
      } catch(err) {
        if (err instanceof CustomError) {
          return assert.ok("handled error correctly")
        }

        return assert.fail("wrong exception raised")
      }
    });
  });
});
