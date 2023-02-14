//! Add or remove property
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle = new Circle(45);
console.log(circle); //{ radius: 45, draw: [λ] }

//! Adding property
circle.going = "Going to Heaven";
circle.location = { x: 47 };

//! We can add the property using bracket notation
circle["valid"] = { y: 14 };
//! Bracket notation dynamically and valid identifier name
const propertyName = "digital";
circle[propertyName] = "Digital India";
const propName = "hello Brother key hai apan";
circle[propName] = "Value hai apan ";

console.log(circle);
/*
Circle { radius: 45,
  draw: [λ],
  going: 'Going to Heaven',
  location: { x: 47 },
  valid: { y: 14 },
  digital: 'Digital India',
  'hello Brother key hai apan': 'Value hai apan ' }
*/

//Deleting the property from it using "delete" keyword

delete circle.location;
console.log(circle);
/*
Circle { radius: 45,
  draw: [λ],
  going: 'Going to Heaven',
  valid: { y: 14 },
  digital: 'Digital India',
  'hello Brother key hai apan': 'Value hai apan ' }
*/

//! bracket notation
delete circle["hello Brother key hai apan"];
console.log(circle);
/*
Circle { radius: 45,
  draw: [λ],
  going: 'Going to Heaven',
  valid: { y: 14 },
  digital: 'Digital India' }
*/

//! Adding method

circle.rect = function () {
  console.log("Rectangle is added");
};

circle["moti"] = function () {
  console.log("function moti is added"); // function moti is added
};

console.log(circle.moti());

//! Deleting method
delete circle.moti;
console.log(circle);
/*
Circle { radius: 45,
  draw: [λ],
  going: 'Going to Heaven',
  valid: { y: 14 },
  digital: 'Digital India',
  rect: [λ] }
*/
