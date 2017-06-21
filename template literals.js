// with ES6
var name = 'Raunaq';
var temp = `
    Hello
              ${name}
          whadup.
You obviouly noticed these literals acknowledge white space!
`;
console.log(temp);

var x = 1, y = 2;
var example = `${x} + ${y} = ${ (x + y) * 2 } says ${name}`;
console.log(example);

// can do fancy conditional strings with these literals
function tag(strings, ...values) {
  values[0] > 14 ?
    values[1] = 'sleepy (need coffee!!)' :
    values[1] = 'hungry!!';
  
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
var conditional = tag`It's past ${ new Date().getHours() }:00, I'm ${""}`;
console.log(conditional);