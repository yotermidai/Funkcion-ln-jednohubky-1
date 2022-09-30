const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];

persons.forEach((item) => {
    console.log(item.age)
      });


names.forEach((item) => {
    console.log((item.charAt(0)))
      });


const ctyryPismena = names.every((item) => item.length > 3 );
    console.log(ctyryPismena);

const delitelneJedenacti = numbers.some((item) => item % 11 === 0);

console.log(delitelneJedenacti);
