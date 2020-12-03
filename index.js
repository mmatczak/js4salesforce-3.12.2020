const person = {
    name: 'Marek',
    age: 41,
    male: true,
    birthDate: '1979-01-25'
};


class Person {
    constructor(name) {
        this.name = name || '';
        this.age = 41
    }
}

const propertyName = 'name'
const marek = new Person('Marek');
// console.log(marek.name);
// console.log(marek[propertyName]);
marek.address = {
    zipCode: '53-601'
}

let zipCode = (marek && marek.address && marek.address.zipCode) || '';
console.log(zipCode);

delete marek.address
zipCode = (marek && marek.address && marek.address.zipCode) || '';
console.log(zipCode);

// Object.keys(marek).forEach(
//     propertyName => console.log(`${propertyName} -> ${marek[propertyName]}`));

