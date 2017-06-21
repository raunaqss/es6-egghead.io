// with ES5
console.log('with ES5')
var firstName = 'Raunaq';
var lastName = 'Singh';
var person = {
  firstName: firstName,
  lastName: lastName
};
console.log(person);

// with ES6
console.log('\nwith ES6');
{
  let firstName = 'Raunaq1';
  let lastName = 'Singh1';
  let person = { firstName, lastName };
  console.log(person);
  let mascot = 'egghead';
  let team = { mascot, person };
  console.log(team);
}
