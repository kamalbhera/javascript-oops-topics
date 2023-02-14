//! Abstraction  -- hide the complexity and show or expose the essentials
//! This program is free from this principle, if you want to see the fixation then move to the next code

function Circle(radius) {
  this.radius = radius;

  //! it must be hide from outside world but it is not hidden over here
  this.optimumLocation = function (factor) {
    console.log("Optimum");
  };
  this.defaultLocation = function () {};
  this.draw = function () {
    this.optimumLocation(0.1);
    console.log("Draw");
  };
}

//! Creating an instance
const circle = new Circle();
circle.optimumLocation = true; // someone change this defintion then our application will crash
circle.draw(); // crash - Error this.optimumLocation is not a function
