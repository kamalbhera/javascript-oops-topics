//! Abstraction - hide the complexity and shows the essentials
//! The previous code will fix through the abstraction
function Circle(radius) {
  this.radius = radius;
  let optimumLocation = function (factor) {};
  let defaultLocation = function () {};
  this.draw = function () {
    //! let x, y; // this is the local scope variable will destroy after the execution of this function
    //! clousre is the way we can access the outer variable inside our function and it wont destroued after this
    //! execution over
    optimumLocation(0.1); //protected from outside world
    //! this.radius =""; //we can use the object property via this way
    console.log("draw"); //draw
  };
}

//! Creating an instance
const circle = new Circle(45);
console.log(circle.draw()); //draw
console.log(circle.radius);
