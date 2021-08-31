const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 40,
    isClean: true
};
//getting the all properties name 
const keys = Object.keys(bottle);
// console.log(keys);

//getting value
const values = Object.values(bottle);
// console.log(values);

//জোরায়  জুড়ায় প্রপাটি পাওরার জন্য entries 
const pairs = Object.entries(bottle);
// console.log(pairs);

Object.seal(bottle);  //seal করা হলে নতুন কনো প্রপাটি বা মান ডডিলিট করা যাবে না কিন্তু অবস্তিত প্রপাটটির মান পরিবর্তন করা যাবে 

Object.freeze(bottle); //freeze করা হলে নতুন কনো প্রপাটি বা মান ডডিলিট করা যাবে না 
bottle.price = 199;
bottle.hight = 20;
delete bottle.isClean;
console.log(bottle);

