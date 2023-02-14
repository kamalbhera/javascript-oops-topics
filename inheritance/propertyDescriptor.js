//! Create an object
let obj = { name: "Kamal" };
/*
let objectBase = Object.getPrototypeOf(obj);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(objectBase);
console.log(descriptor);
*/
/*!
Object.defineProperty(
  objectName,
  targetProperty,
  propertyDescriptorObject
);
*/
// ! Iteration
const keys = Object.keys(obj); //
console.log(keys); //Array [ "name" ]

for (let key in obj) {
  console.log("Key", key); //Key name
  console.log("Values", obj[key]); //Values Kamal
}

Object.defineProperty(obj, "name", {
  writable: false, // override access
  configurable: false, // delete the property access
  enumerable: true, // iteration access
});

//! If configration is false then , we cant override the property name
obj.name = "Mongo";
console.log(obj.name); // Kamal

//! If writable is false then, we cannot delete the property
delete obj.name;
console.log(obj.name); //Kamal

//! If enumerable is true, iteration is possible
const keying = Object.keys(obj);
console.log(keying); //Array [ "name" ]
