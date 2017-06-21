// with ES 5
console.log('with ES5')
var fs = [];

for (var i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}

fs.forEach(function(f) {
  f();
});

// with ES6
console.log('\nwith ES6')
fs = [];

for (let i = 0; i < 10; i ++) {
  fs.push(() => console.log(i));
}

fs.forEach((f) => f());

