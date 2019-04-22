const TYPES = {
  HEX: 'hex',
  RGB: 'rgb',
  HSL: 'hsl',
  RGBA: 'rgba',
  HSLA: 'hsla',
  STRING: 'string',
};

const REGEX = {
  HEX: /^#(?:([0-9a-fA-F]{6})|([0-9a-fA-F]{3}))/,
  RGB: /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/,
  RGBA: /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?\.?\d+)\)$/,
};

function isHex(color) {
  return color.match(REGEX.HEX);
}

function isRGB(color) {
  return color.match(REGEX.RGB);
}

function isRGBA(color) {
  return color.match(REGEX.RGBA);
}

class Color {
  constructor(color) {
    this.color = color;
  }

  hex() {
    return this.color;
  }

  static getRandom() {
    // 16777215 base 10 = FFFFFF base 16
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

module.exports = Color;

module.exports.isHex = isHex;
module.exports.isRGB = isRGB;
module.exports.isRGBA = isRGBA;
