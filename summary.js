const pen = {
    brand: 'ekono',
    price: 10;
    writePoem: function (food) {
        console.log(food);
    }
}

const keys = Object.keys(pen);
const values = Object.keys.values(pen);

for (const key in pen) {
    console.log(pen[key]);
}


const a = { a: 1 };
const b = { b: 1 };
const c = a;
if (a === b) {
    
}

const aBounded = pen.writePoem.bind(a);
aBounded();

// this 
