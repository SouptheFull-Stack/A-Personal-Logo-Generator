const { Triangle, Square, Circle } = require("./shapes");

describe("renderTriangle", () => {
  it("should create a triangle with the input color values", () => {
    const shape = new Triangle("äbc", "textcolor", "blue");
    shape.setColor(`${shape.shapeColor}`);
    expect(shape.render()).toEqual(
      `<polygon points="100,10 190,190 10,190" fill="${shape.shapeColor}" />`
    );
  });
});

describe("renderCircle", () => {
  it("should create a circle with the input color values", () => {
    const shape = new Circle("abc", "textcolor", "blue");
    shape.setColor(`${shape.textColor}`);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />`
    );
  });
});

describe("renderSquare", () => {
  it("should create a square with the input color values", () => {
    const shape = new Square();
    shape.setColor(`${shape.textColor}`);
    expect(shape.render()).toEqual(
      `<rect x="100" y="100" width="100" height="100" fill="${shape.shapeColor}" />`
    );
  });
});

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
