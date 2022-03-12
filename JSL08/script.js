//const showMyInfo = () => {
   // const date = new Date();
   // const month = date.getMonth();
   // const day = date.getDay();
   // const year = date.getFullYear();
   // const dateString = `${month}/${day}/${year}`;
   // document.getElementById('date').innerHTML = dateString;
   // document.getElementById('name').innerHTML = 'Jon';
  //};

console.log('Hello World!');
console.log(`The value of PI is ${Math.PI}`);
console.log('LOG');

let myObj = { name: 'Jon', age: 30 };//object
console.log(myObj);

let myArr = [1, 2, 3, 4, 5];//array
console.log(myArr);

console.info('Stacie');//info
console.warn('WARN');//warning
console.error('ERROR');//error

//combining multiple
let name = 'Jon';
console.log('Hello my name is ' + name);
console.log(`Hello my name is ${name}`);
console.log(`My age is ${20 + 10}`);
console.log('%o', { name: 'Jon', age: 30 });
console.log('%O', { name: 'Jon', age: 30 });
console.log('%i', 123);
console.log('%d', 123);
console.log('%s', 'String Text');
console.log('%f', 123.45);
console.log(
  'My name is %s and I am %i years old. View my info here: %o',
  'Jon',
  30,
  { name: 'Jon', age: 30 }
);
console.log('%c Hello', 'color: red; font-size: 20px');
console.log(
  'My name is %cJon %cSnow',
  'color: red; font-size: 20px',
  'color: #4B0082; font-size: 2em',
  'I am 30.'
);

//assertion
console.assert(1 === 1, '1 is equal to 1'); // true - no output
console.assert(1 === 2, '1 is not equal to 2'); // false - logs message

//clears the console. 

//console.log('This is a message');
//console.clear(); // clears the console

//count

console.count('First Counter'); // "1"
console.count('First Counter'); // "2"
console.count('Second Counter'); // "1"
console.count('Second Counter'); // "2"


//group

console.group('Group 1');
console.log('Hello!');
console.group('Group 2');
console.log('Hello Again!');
console.groupEnd();
console.groupEnd();


//timer
console.time('Time');
// Code to time
console.timeEnd('Time');

//trace
const func1 = () => {
  const func2 = () => {
    console.trace();
  };
  func2();
};

func1();

//table

const users = [
  { name: 'Jon', age: 30 },
  { name: 'Bob', age: 20 },
];

console.table(users);


//debugging errors
try {
  throw new Error('Something broke!');
  console.log('Trying something');
} catch (e) {
  console.log(e.message);
}
finally {
  console.log('This always runs!');
}

try {
  console.log('Trying something');
} catch (e) {
  console.log(e.message);
} finally {
  console.log('This always runs!');
}