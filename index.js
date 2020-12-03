const person = {
    name: 'Marek',

    sayHello() {
        console.log(this);
        setTimeout(
             () => {
                console.log(`Hello ${this.name}`)
            },
            1000
        );

        // JavaScript A-apply B-bind C-call
        // (() => console.log(`Hello ${this.name}`))();
        // (function () {
        //     console.log(`Hello ${this.name}`);
        // }).call(this);
        // return `Hello ${this.name}`;
    }
};

// person.sayHello();
// person.sayHi();

console.log(person.sayHello());
