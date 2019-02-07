// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const arrayText = [9, 3, 4];
console.log(arrayText);

arrayText.forEach((n) => {
    console.log(n);
});

// use map

const newArray = arrayText.map(i =>i +1);
console.log(newArray);


// use pop

newArray.pop();
console.log(newArray);

// use push
newArray.push(8);
console.log(newArray);

// use shift

newArray.shift();
console.log(newArray);


// use unshift
newArray.unshift(9);
console.log(newArray);


// use filter