//! Copied by Value
let x = 10;
let y = x;
x = 20;
console.log(x); //20
console.log(y); // 10
//! Indepenent Call
//_________________________
//! Copied BY Reference
let ob1 = { value: 10 };
let ob2 = ob1; //storing address

ob1.value = 47;

console.log(ob1); //{ value: 47 }
console.log(ob2); //{ value: 47 }

//! Important Question
//! Passing call by value -- 2 independent
let num = 10;
function increase(num) {
  num++;
  console.log(num); // 11
}

increase(num);
console.log(num); // 10 copy by value

//! Passing call by reference -- Dependent
let obj = { value: 10 };
function increase2(obj) {
  obj.value++;
  console.log(obj.value); //11
}

increase2(obj);
console.log(obj.value); //11
