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
const normalGolam = {
    id: 122,
    money: 4000,
    name:'normal golam'
}
student.treatDay(2000);
const heroTreatDay = student.treatDay.bind(heroBalam);
heroTreatDay(2000);
heroTreatDay(1000);
student.treatDay(1000);
const normalTreatDay = student.treatDay.bind(normalGolam);
normalTreatDay(100);