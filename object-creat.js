//using object literal
const student = { name: 'sakib Al Hasan', job: 'cricketer' };

//object constructor
const person = new Object();

//
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

//class
class People{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Mamus', 12);
// console.log(peop);


//function
function Mamus(name) {
    this.name = name;
}
const man = new Mamus('kader');
console.log(man);