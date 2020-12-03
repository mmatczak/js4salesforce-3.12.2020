const numbers = [
    1, 2, 4, 7, 8
];

let names = ['Marek', 'Czarek'];

let people = [{
    name: 'Marek'
}];

// names.push('Basia');
names = [...names, 'Basia'];
people = [...people];
names = ['Marek', 'Czarek', 'Basia'];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const biggerNumber = numbers[i] + 2;
    if (biggerNumber > 6) {
        sum += biggerNumber;
    }
}

const biggerNumbers = people
    .map(person => person.age)
    .filter(function (biggerNumber) {
        return biggerNumber > 6;
    })
    .reduce((sum, myNum) => sum + myNum, {});


console.log(biggerNumbers);
numbers.forEach((myNumber) => {
    console.log(myNumber);
})
