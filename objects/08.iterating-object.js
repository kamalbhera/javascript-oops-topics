//! iterating Object or enumerating the object

//!Using For in loop
function Circle(radius) {
  this.radius = radius; // property
  this.draw = function () {
    //method
    console.log("draw");
  };
}

const circle = new Circle(45);
circle; //Circle { radius: 45, draw: [λ] }

//! Looping to find out the keys and values
//! Returning both the key and method
for (let key in circle) {
  console.log(key); // returning both the key and method  -- radius, draw
}

//! returning both the key and values
for (let key in circle) {
  console.log(key, circle[key]); //radius 45, draw funciton ()
}

//! returning only the propert not method
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key); //radius
  }
}

//! Another approach to find the key and value by using inbuild method
//! Object.keys() --> Return an array element as keys
const keys = Object.keys(circle);
console.log(keys); //[ 'radius', 'draw' ]
//! Object.values() --> Return an array element as values
const values = Object.values(circle);
console.log(values); //[ 45, [λ] ]
