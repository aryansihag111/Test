// Object Clone Method

let original = {
   a: 1, 
   b: 2
};





// 1. Using the Spread Operator (...):

//  let copied = {...original};

// console.log(copied);






// 2. Using Object.assign():

// let copied = Object.assign({}, original);

// console.log(copied);


// let copied = Object.assign({}, original)

// console.log(copied);







// 3. Using JSON.stringify() and JSON.parse():

// let copied = JSON.parse(JSON.stringify(original));

// console.log(copied);

// let copy = JSON.parse(JSON.stringify(original))

// console.log(copy);






// 4. Using a Loop:

// let copied = {};
// for (let key in original) {
//     copied[key] = original[key];
// }

// console.log(copied);

// let copy = {};
// for (let a in original){
//    copy[a] = original[a]
// }

// console.log(copy);






// 5. Using Object.fromEntries() with Object.entries():


// let copied = Object.fromEntries(Object.entries(original));

// console.log(copied);

let copy = Object.fromEntries(Object.entries(original));

console.log(copy);


