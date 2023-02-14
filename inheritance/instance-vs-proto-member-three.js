function Circle(radius) {
  //! Instance member
  this.radius = radius;

  this.move = function () {
    console.log("Moving");
  };
}

//! Protoype Member
Circle.prototype.draw = function () {
  //! Accessing instance  member method
  this.move();
  console.log("Drawing");
};

const c1 = new Circle(78);

c1.draw();

// ! output
// Moving
// Drawing
