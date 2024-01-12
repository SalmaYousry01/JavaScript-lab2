class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name,
      this.sides = sides,
      this.sideLength = sideLength
  }
  calcPerimeter() {
    console.log(`Perimeter of ${this.name}: ` + this.sides * this.sideLength);
  }
}

const square = new Shape("Square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("Triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    console.log(`Area of Square: ` + this.sideLength * this.sideLength);
  }
}

class Triangle extends Shape {
  constructor(sideLength) {
    super("Triangle", 5, sideLength);
  }
  calcArea() {
    console.log(`Area of Triangle: ` + this.sideLength * this.sideLength);
  }
}


const square1 = new Square(6);
square1.calcArea();
square1.calcPerimeter();

const triangle1 = new Triangle(6);
triangle1.calcArea();
triangle1.calcPerimeter();