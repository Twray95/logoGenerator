class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  generateLogo() {
    return `<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
    <text fill="${this.textColor}" font-size="50" font-family="Verdana" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.text}</text>
  </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  generateLogo() {
    return `<svg width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text fill="${this.textColor}" font-size="50" font-family="Verdana" x="95" y="160">${this.text}</text>
  </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  generateLogo() {
    return `<svg width="300" height="200">
    <rect width="150" height="150" fill="${this.shapeColor}" />
    <text fill="${this.textColor}" font-size="45" font-family="Verdana" x="27" y="87">${this.text}</text>
  </svg>`;
  }
}

module.exports = {
  Triangle: Triangle,
  Square: Square,
  Circle: Circle,
};
