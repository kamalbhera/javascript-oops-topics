const circle = {
  //! propertties - hold valus
  radius: 20,
  location: {
    x: 1,
    y: 2,
  },
  //!   method/function is used to define some logic
  draw: function () {
    console.log("Your Circle is draw");
  },
};

console.log("Object Literal Syntax"); //Object Literal Syntax
//! We can access the object using dot notation  and Bracket Notation
//! Dot Notation
console.log(circle); // { radius: 20, location: { x: 1, y: 2 }, draw: [λ: draw] }
console.log(circle.radius); //20
console.log(circle.location); //{ x: 1, y: 2 }
console.log(circle.location.x); //1
console.log(circle.location.y); //2
console.log(circle.draw); //Your Circle is draw
console.log(circle.draw()); //Your Circle is draw

//! Bracket Notation
