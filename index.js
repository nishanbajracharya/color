const TYPES = {
  HEX: 'hex',
  RGB: 'rgb',
  HSL: 'hsl',
  RGBA: 'rgba',
  HSLA: 'hsla',
  STRING: 'string',
};

function isHex(color) {
  if (color.substr(0, 1) !== '#') return false;

  const numbers = color.substr(1);
  const parsed = parseInt(numbers, 16);

  return parsed.toString(16) === numbers.toLowerCase();
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
