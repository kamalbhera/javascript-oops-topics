//! Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw"); //Draw
    console.log(this); //{ radius: 45, draw: [λ] }
    console.log(this.radius); //45
  };
}

const another = new Circle(45);
console.log(another.radius); //45
console.log(another.draw()); // undefined
