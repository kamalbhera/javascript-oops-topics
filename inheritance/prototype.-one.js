//! object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the CIrcle"); //Drawing the CIrcle
  };
}

const circle = new Circle(14);

console.log(circle.radius); //14
console.log(circle.draw());

Object.getPrototypeOf(circle);
