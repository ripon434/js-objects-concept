const student = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    treatDay: function (expanse,bikshis,tex) {
        this.money = this.money - expanse-bikshis-tex;
        console.log(this);
        return this.money;
    }
}
const heroBalam = {
    id: 122,
    money: 9000,
    name:'Hero Balam'
}
const normalGolam = {
    id: 109,
    money: 4000,
    name:'normal golam'
}
// //call  এখানে  কল করলে কমা ব্যাবহার করতে হয়

// student.treatDay.call(heroBalam, 500,500,50);
// student.treatDay.call(heroBalam, 1000,500,50);


//apply এখানে  কল করলে এরে  ব্যাবহার করতে হয়

student.treatDay.apply(heroBalam, [1000, 500, 500]);

student.treatDay.apply(normalGolam, [200, 200, 100]);