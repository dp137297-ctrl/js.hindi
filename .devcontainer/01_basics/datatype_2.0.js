// // primitive datatype

// // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// const score = 100;
// const scoreDecimal = 100.55;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; // undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);

// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(score, scoreDecimal, isLoggedIn, outsideTemp, userEmail, id, bigInt);

// // Reference (non-primitive)
// // Array, Object, Function


// const heros = ['shaktiman','naagraj','doga']
//   let myObj={//curly braces object literal
//     name:"Durgesh",

// }

// const myFunction = function(){
//     console.log("Hello World");
// }


// //typeof for the see type of the variable
// console.log(typeof heros);

//stack(primitive) ,heap(non-primitive)

let myname = "Durgesh"
anothername = myname;
 console.log(myname);
 console.log(anothername);
 let user1={
  email:"durgesh@example.com",//
  upi:"durgesh@okicici"
 }

let user2 = user1;//create a dumThe dummy of the email has been replaced by the user too. They all are just copy images. 
user2.email = "ash1232@example.com";//change the email of user2
console.log(user1.email);
console.log(user2.email);
