// const firstName = 'Austin';
// const lastName = 'Casey';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);
// console.log(firstName, lastName);

// const firstName0 = 'Britney';
// const lastName0 = 'Gears';
// console.log(`${firstName0} ${lastName0}`);

// const firstName2 = 'Ted';
// const lastName2 = 'Bundy';


const namePrinter = (firstName, lastName) => {
console.log(`${firstName} ${lastName}`);
};

namePrinter('Austin', 'Casey');
namePrinter('Ted', 'Bungus');

const nuggetizer = (animal) =>{ 
return `processed ${animal}`;
};

console.log(nuggetizer('peeg'));

const dogBreed = () =>{
const db = prompt('What is your favorite dog breed?');
return alert(`My favorite dog breed is ${db}.`);
};

dogBreed()