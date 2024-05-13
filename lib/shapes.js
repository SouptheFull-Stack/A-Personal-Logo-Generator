class Shapes {
  constructor(text, textColor, shapeColor) {
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  setColor() {
    return `<polygon points="100,10 190,190 10,190" fill="${this.shapeColor}" />`;
  }
  render() {
    return this.setColor();
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  setColor() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
  render() {
    return this.setColor();
  }
}

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  setColor() {
    return `<rect x="100" y="100" width="100" height="100" fill="${this.shapeColor}" />`;
  }
  render() {
    return this.setColor();
  }
}

module.exports = { Triangle, Circle, Square };
