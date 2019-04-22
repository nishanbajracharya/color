const expect = require('chai').expect;
const assert = require('chai').assert;

const Color = require('../index');

describe('Static methods', function() {
  it('Should return a random color', function() {
    const color = Color.getRandom();
    assert.isString(color);
  });
});
