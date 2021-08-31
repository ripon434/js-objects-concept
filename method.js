const student = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    isRich: false,
    major: 'math',
    subject: ['english', 'economics', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDay: function (expanse,bokshis) {
        this.money = this.money - expanse-bokshis;
        return this.money;
        
        
    }
}

student.takeExam();
const remaining = student.treatDay(900,400);
const remaining2 = student.treatDay(1100,500);
console.log(remaining);
console.log(remaining2);