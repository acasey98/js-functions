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

const dogBreed = (db) =>{
return (`My favorite dog breed is ${db}.`);
};

console.log(dogBreed('schnauzer'));

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('yes');

// const nuggetizerDiv = document.getElementById('nuggs');
// nuggetizerDiv.innerHTML = nuggetizer('Beegus');

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML += textToPrint;

};

printToDom('nuggs', nuggetizer('Gruto Grundis'));

printToDom('dog-breeds', dogBreed('grug'));

let bandNum = 0;
const addBand = (bandNme) => {
    bandNum += 1;
printToDom('band-list', `${bandNum}. ${bandNme} `);

};

addBand('Active Child');
addBand('Glass Animals');