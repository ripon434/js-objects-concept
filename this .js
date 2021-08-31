const student = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    treatDay: function (expanse) {
        this.money = this.money - expanse;
        console.log(this);
        return this.money;
    }
}


const heroBalam = {
    id: 122,
    money: 9000,
    name:'Hero Balam'
}

// function add(a, b) {
//     console.log(this);
// }