
// let a ;

// implicit :-

// function Demo(a,b){
//     console.log(a+b);
// }
// Demo(10,20);

// Explicit :-

// function Demo1(a,b){
//     return a+b;
// }
// console.log(Demo1(10,20));

// Function declaration

// let a = 10;

// let parent = function(){
//     console.log("hy i am pranjal");
// }
// parent()

// WAP to find the factorial of 6

// function factorial(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(factorial(6));

// function factorial(n){
//     let fact = 1

//     for(let i = 1;i<=n;i++){
//         fact = fact * i
//     }
//     return fact;
// }
// console.log(factorial(6));

// Arrow function :- we can write the code in short

// let perfectNumber = (num) => {
//     let sum = 0;

//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum = sum + i;
//         }
//     }
//     return sum === num;
// };

// console.log(perfectNumber(28));

// prime number = 6

// let Primenumber = (num) => {

//     let count = 0;
//     for(let i = 1;i<=num;i++){
//         if(num%i == 0){
//          count = count + 1
//         }
//     }
//     return count==2;
// }
// console.log(Primenumber(3))

// Nested function :-

// function Parent(){

//     console.log("hy i am yo");

//     let child1 = function(){
//         console.log("hy i am child1")
//     }

//     let child2 = () =>{
//         console.log("hy i am child2")
//     }
//     child1()
//     child2()
// }
// Parent()

// Higher order function :- it is a function which accept function as an argument

// Call Back function :- call back function is a function who passed as a parameter

// function Parent(cbf){
//     console.log("hy i am higher order function")
//     cbf();
// }

// function Child(){
//     console.log("hy i am child function");
// }
// Parent(Child);

// function MultipleGreet(num,cbf){
//     for(let i = 1;i<=num;i++){
//         Greet();
//     }
// }
// function Greet(){
//     console.log("Goodmorning");
// }
// MultipleGreet(100,Greet)

// num = 153

// let Armstrongnumber = (num) => {
//   let sum = 0;
//   let original = num;

//   while (num > 0) {
//     let digit = num % 10;
//     digit = digit * digit * digit;
//     sum = sum + digit;
//     num = Math.floor(num / 10);
//   }
//   return sum == original;
// };

// console.log(Armstrongnumber(153));

// num = 121

let Palindrome = (num) => {
  let rev = 0;
  let reverse = num

  while(num>0){
    let digit = num%10;
    rev = (rev*10) + digit
    num = Math.floor(num/10)
  }
  return rev == reverse
}
console.log(Palindrome(151));