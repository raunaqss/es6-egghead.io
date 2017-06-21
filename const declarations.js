// with ES5
if (true) {
  var VALUE = 'something we want const';
}
VALUE = 'something else with ES5';
console.log(VALUE);

// with ES6

if (true) {
  const VALUE = {};
  VALUE.fact = 'a constant is a reference, hence its properties can be assigned and re-assigned';
  VALUE.fact = 'yeah';
  console.log(VALUE.fact);
}
console.log(VALUE) // this will return the previous VALUE declared with var

//if (true) {
//  const VALUE = 'something that will remain const with ES6';
//  VALUE = 'oops this will generate a TypeError';
//}



