// function demo(){
//     var a = 10;
//     console.log(a);
//     if(true){
//         console.log(a);
//     }
// }
// demo();
// console.log(a);

// // let block scope 
// if(true){
//     const b =100;
//     console.log(b); // ReferenceError : b is not defined 
// }

// // const - block 
// if(true){
//     const c =100;
//     console.log(c);
// }
// console.log(c);  // ReferenceError : c is not defined


// // declaration
// var a;
// let b;
// const c;
// // ================================
// // Reinit -

// var a =100;
// a = 200;
// console.log(a);

// let b = 1000;
// b = 2000;
// console.log(b);

// const b = 1000;
// c = 2000;
// console.log(c);


// // When we creating the object , of the const type so we can reinit them.

// const person = {
//     name1 : "pranjal",
//     age : 21
// }

// console.log(person.name1);
// person.name1 = "laksh"
// console.log(person.name1);

// // ============================================

// var a = 10;
// var b = 20;
// console.log(a);

// let a = 5000;
// let b = 4000;
// console.log(b);  // SyntaxError :  Identifier 'b' has already been declared

// const c = 1;
// const c = 2;
// console.log(c);  // SyntaxError :  Identifier 'c' has already been declared