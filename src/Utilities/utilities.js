const HexConverter = (c) => {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbHex = (r, g, b) => {
  return HexConverter(r) + HexConverter(g) + HexConverter(b);
};

export default rgbHex;
