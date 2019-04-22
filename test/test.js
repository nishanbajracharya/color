const expect = require('chai').expect;

const Color = require('../');

describe('Static methods', function() {
  it('Should return a random color', function() {
    const color = Color.getRandom();

    expect().to.satisfy(function() {
      return Color.isHex(color);
    });
  });
});

describe('Color Getter', function() {
  it('Should return color in Hex form', function() {
    const color = new Color('#FFFFFF');

    expect().to.satisfy(function() {
      return Color.isHex(color.hex());
    });
  });
});
