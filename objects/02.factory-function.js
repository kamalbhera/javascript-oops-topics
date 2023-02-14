//! factory Function
function createObject(radius) {
  return {
    // radius: radius, if key name and value name are same then we can just write only one
    radius,
    location: {
      x: 1,
      y: 2,
    },
    draw: function () {
      console.log("Draw");
    },
  };
}

//! Creating an instance
const circle = createObject(20);
circle.draw(); //Draw
