// for loop
// print hello 100 times.

// for (let i = 1; i <= 100; i++) {
//   console.log("laksh is gay");
// }

// While loop

// extract the digits from the number

// Math floor - convert decimal to integer

// let num = 5674;
// while (num > 0) {
//   let digit = num % 10;
//   console.log(digit);
//   num = Math.floor(num / 10);
// }

// let num = 34567;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;
//     sum = sum + digit;
//     num = Math.floor(num / 10);
// }

// console.log(sum);

// square all the digits and sum this and display the number 

// let num = 5674;
// let sum = 0;

// while (num>0) {
//   let digit = num % 10;
//   sum = sum + digit * digit;
//   num = Math.floor((num/10))
// }
// console.log(sum);

// find the largest digit in a given number 

// let num = 34567;
// let largest = 0;

// while (num > 0) {
//     let digit = num % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(largest);

// count the number of digits in a number using a while loop

// let num = 12345;
// let count = 0;

// while (num != 0) {
//     num = Math.floor(num / 10);
//     count++;
// }
// console.log(count);

// calculate the factorial of a number using a while loop

// let fact = 1;
// let num = 5;

// while (num>0) {
//     fact = fact * num;
//     num--
//     console.log(fact);
// }

// Prime number 

// let num = 4;
// for(let i = 2 ; i<=num ; i++){
//     let count = 0;
//     if(num%i == 0){
//         count++;
//     }
//     if(count == 1){
//         console.log("number is prime number",num);
//     }
// else{
//     console.log("number is prime number",num);
// }
// }


// Armstrong number

// let num = 153
// let sum = 0;

// while (num>0) {
//     let digit = num%10;
//     num = num + digit * digit * digit;
//     num = Math.floor(num / 10);
// }
// if (n===sum) {
//     console.log(n,"Number is armstrong");
// } else {
//     console.log(n,"Number is not armstrong");
// }

// let num = 6;
// let sum = 0;

// for(let i = 1;i<=num ; i++){
//     if(num%i == 0)
//         sum += i
// }
// if (sum===num) {
//     console.log(num,"number is perfect number");
// } else {
//     console.log(num,"number is not perfect number");
// }

// Strong number

// let num = 145;
// let n = num;
// let sum = 0;

// while(num>0){
//     let digit = num%10;
//     sum = sum + isFact(digit);
//     num = Math.floor(num/10)
// }

// function isFact(num){
//     let fact = 1;
//     for(let i = 1; i<= num ; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// if(n===sum){
//    console.log(n,"number is strong number");
// } else {
//     console.log(n,"number is strong number");
// }

let num = 121
let n = num;
let rev = 0;
while (num>0) {
    let digit = num%10;
    rev = (rev*10) + digit;
    num = Math.floor(num/10)
}
if(n===rev){
    console.log(n,"Number is palindrome number");
} else {
    console.log(n,"Number is palindrome number");
}