// Print numbers from 1 to 20 using a while loop.

// let num = 1;

// while (num<=20) {
//     console.log(num)
//     num++
// }

// let i = 1;

// while (i<=50) {
//     if(i%2 == 0){
//       console.log(i)
//     }
//     i++
// }

// Print all odd numbers between 1 and 75 using a while loop.

// let i = 1;

// while (i<=75) {
//     if(i%2 != 0){
//         console.log(i)
//     }
//     i++
// }

// Print numbers from 100 down to 1 using a while loop.

// let num = 100;

// while (num>=1) {
//     console.log(num)
//     num--
// }

// Find the sum of all even numbers between 1 and 100 using a while loop

// let i = 1;
// let sum = 0;

// while (i<=100) {
//     if(i%2 == 0){
//         sum = sum + i
//     }
//     i++
// }
// console.log(sum);

// Print the multiplication table of 7

// let i = 1;

// while (i<=10) {
//     console.log(7*i)
//     i++
// }

// Count how many digits are present in a number = 58932

// let num = 58932
// let count = 0;

// while(num>0){
//     let digit = num%10;
//     count++
//     num = Math.floor(num / 10);
// }
// console.log(count)

// Find the sum of the digits of a number = 5832

// let num = 5823
// let sum = 0;

// while(num>0){
//     let digit = num%10
//     sum =  sum + digit
//     num = Math.floor(num/10);
// }
// console.log(sum)

// Reverse a number using a while loop = 12345

// let num = 12345
// let rev = 0;

// while (num>0) {
//     let digit = num%10
//     rev = (rev*10) + digit
//     num = Math.floor(num/10);
// }
// console.log(rev)

// Check whether a number is a palindrome using a while loop. = 1221

// let num = 121;
// let n = num
// let rev = 0;

// while (num>0) {
//     let digit = num%10
//     rev = (rev*10) + digit
//     num = Math.floor(num/10)
// }
// if (n===rev) {
//     console.log("the number is palindrome");
// } else {
//     console.log("the number is not palindrome");
// }

// Find the factorial of a number using a while loop = 5

// factorial = 5 * 4 * 3 * 2 * 1

// let num = 5
// let fact = 1;

// while (num>0) {
//     fact = fact * num
//     num--
// }
// console.log(fact);

// Find the greatest digit in a number using a while loop = 58392

let num = 58392;
let greatest = 0;

while (num > 0) {
    let digit = num % 10;

    if (digit > greatest) {
        greatest = digit;
    }

    num = Math.floor(num / 10);
}

console.log(greatest);