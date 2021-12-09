class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
const person = new Person('Mosh');
const a = person.name;
const b = person.walk;


