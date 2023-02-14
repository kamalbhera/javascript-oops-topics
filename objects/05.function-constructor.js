//! Function constructor
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
console.log(Circle.constructor); // Function constructor

//! Behind the scene
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = radius;
`
);

const another = new Circle1(45);
console.log(another); //{ radius: 45, draw: 45 }

Circle.call({}, 45);
Circle.apply({}, [45, 75, 21]);
