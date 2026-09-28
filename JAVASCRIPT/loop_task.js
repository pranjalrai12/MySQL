// let sum = 0;
// for(i=1;i<=5;i++){
//     sum = sum + i;
// }
// console.log(sum);

// print the multiplication table of a number m using a by for loop

// let m = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(m * i);
// }

// for(let i = 1 ; i<=50 ; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// for(let i = 1; i<=200; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log(i);
//     }
// }

// let n = 10;
// let product = 1;

// for (let i = 2; i <= n; i += 2) {
//     product = product * i;
// }

// console.log(product);


// Print all odd numbers between 1 and 70. ----


// for (let i = 1; i <= 70; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// let sum = 0;
// for(i = 1;i<=30;i++){
//     if(i%2 == 0){
//     sum = sum + i;
//     }
// }

// console.log(sum);

// for(let i = 10 ; i>=1 ; i--){
//     console.log(i);
// }

// for(let i = 1 ; i<=50 ; i++){
//     console.log(i);
// }

// for(let i = 1 ; i<=20 ; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// for(let i = 1 ; i<=30 ; i++){
//     if(i%2 !== 0 ){
//         console.log(i)
//     }
// }

// for(let i = 1; i<=50 ; i++){
//     if(i%5 == 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<=100 ; i++){
//     if(i%3 == 0){
//         console.log(i);
//     }
// }

// let sum = 0;
// for(i = 1 ; i<=10 ; i++){
//     sum += i
// }
// console.log(sum);

// let sum = 0;

// for(i = 1 ; i<=50 ; i++){
//     if(i%2 == 0){
//         sum += i
//     }
// }

// console.log(sum);

// let num = 0;

// for(i = 1 ; i<=50 ; i++){
//     if(i%2 !== 0){
//         num += i;
//     }
// }
// console.log(num);

// let num = 0;
// for(let i = 1 ; i<=10; i++){
//     num = 7 * i;  
//     console.log(num);
// }


// for(let i = 1 ; i<=10 ; i++){
//     console.log(i * 12);    
// }

// Fibonacci numbers :- IMP
let a = 0;
let b = 1;
for(let i = 1 ; i<=7 ; i++){ // i=1 1<=7 | i=2 | i=3 | i=4
    console.log(a) // 0 // 1 // 1 // 2
    let temp = a+b; // temp = 1 || temp = 2 | temp = 3
    a = b ; // a = 1 // a = 1 // a = 2
    b = temp; // b = 1 // b = 2 // b = 3
}

