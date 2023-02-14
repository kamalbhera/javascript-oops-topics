//! The previous code was created for private member which was not the object property that was the
//! Local variable which we can called them as private properties
//! What is getter?
//! Getter is the function that is used to read the property
//! What is setter?
//! Setter is the function that is used to write the property

//! We can create the getter and setter function by using Object.defineProperty()

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 }; // created a private member
  this.draw = function () {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation; // accessing this variable due to closure
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Wrong");
      }
      return (defaultLocation = value);
    },
  });
}

const circle = new Circle(75);
console.log(circle); //! Circle { radius: 75, draw: [λ] }
