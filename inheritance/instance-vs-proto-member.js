//! Instance member vs Protyotype Member

function Circle(radius) {
  //! Instance member
  this.radius = radius;
  //   this.draw = function () {
  //     console.log("Drawing");
  //   };
}

//! Creating an object
const c1 = new Circle(12);
const c2 = new Circle(12);

//! Let create an constructor function object
// const circle = {};

//! Prototype Member
Circle.prototype.draw = function () {
  console.log("Drawing");
};

///! overwrite
Circle.prototype.toString = function () {
  return `Circle with Have radius ${this.radius}`;
};
// (c1.prototype === Object.getPrototypeOF(circle)) === circle.__proto__; // true
//! Output
// Object.getPrototypeOf(circle) === c1.__proto__; //false -- two difference address
// Object.getPrototypeOf(c1) === c2.__proto__; //true
