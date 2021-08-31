const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 40,
    isClean: true
};

/*
for(let i = o; i<10; i++){

}

for(const num of numbers){  }  //array


for(const prop in student ){ }  // object

*/

for (const prop in bottle) {
    // console.log(bottle[prop]);
    // console.log(prop, bottle[prop]);
    // console.log(prop);
}
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

//advanced
const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
