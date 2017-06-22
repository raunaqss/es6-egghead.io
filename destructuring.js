var {name, position} = {
  name: 'Raunaq',
  position: 'Forward',
  city: 'Mumbai',
  language: 'English'
};
console.log(name, position, '\n')

function returnObj() {
  return {
    name: 'Raunaq',
    position: 'Forward',
    city: 'Mumbai',
    language: 'English'
  };
}
var {name:name1, position:pos1} = returnObj();
console.log(name1, pos1, '\n');

var people = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
]

people.forEach(
  ({firstName}) => console.log(firstName) 
);


var [, Skyler] = people; // descructuring of arrays is quite interesting

function logEmail({email}) {
  console.log(email);
}
logEmail(Skyler);