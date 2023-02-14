//! Constructor Property

//! Factory function
function createObj(radius) {
  return {
    radius: radius,
  };
}
const another = createObj(45);
console.log("Factory ", another.constructor); //[λ: Object]

//! Constructor function
function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(56);
console.log(circle); //Circle { radius: 56 }
console.log("constructor Function ", circle.constructor); //[λ: Circle]

//1 Object literal
const x = {};
console.log(x.constructor); // [λ: Object]

const str = "";
console.log(str.constructor); // [λ: String]

const num = 1;
console.log(num.constructor); // [λ: Number]

const bool = true;
console.log(bool.constructor); // [λ: Boolean]
