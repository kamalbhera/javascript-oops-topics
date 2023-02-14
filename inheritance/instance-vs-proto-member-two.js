function Circle(radius) {
  this.radius = radius;

  //! Instance member methods
  this.move = function () {
    // ! accessing prototype member method
    this.draw();
    console.log("Moving ");
  };
}

Circle.prototype.draw = function () {
  console.log("Drawing");
};

const c1 = new Circle(12);
c1.move();

//! Output
//! Drawing
//! Moving
