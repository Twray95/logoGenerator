const {
  Triangle: Triangle,
  Square: Square,
  Circle: Circle,
} = require("../lib/shape");

describe("function should create a logo with text in it", () => {
  describe("should create an svg of a circle with text in it", () => {
    it("should generate a circle svg", () => {
      const result = new Circle("tst", "red", "circle", "blue");
      const resultLogo = result.generateLogo();
      expect(resultLogo).toEqual(`<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" fill="blue" />
    <text fill="red" font-size="50" font-family="Verdana" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">tst</text>
  </svg>`);
    });
  });
  describe("should create an svg of a triangle with text in it", () => {
    it("should generate a triangle svg", () => {
      const result = new Triangle("tst", "red", "triangle", "blue");
      const resultLogo = result.generateLogo();
      expect(resultLogo).toEqual(`<svg width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text fill="red" font-size="50" font-family="Verdana" x="95" y="160">tst</text>
  </svg>`);
    });
  });
  describe("should create an svg of a square with text in it", () => {
    it("should generate a square svg", () => {
      const result = new Square("tst", "red", "square", "blue");
      const resultLogo = result.generateLogo();
      expect(resultLogo).toEqual(`<svg width="300" height="200">
    <rect width="150" height="150" fill="blue" />
    <text fill="red" font-size="45" font-family="Verdana" x="27" y="87">tst</text>
  </svg>`);
    });
  });
});
