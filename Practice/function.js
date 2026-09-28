// function square(a){
//     console.log(a*a)
// }
// square(5);

// let Multiply = function(a,b){
//     console.log(a*b)
// }
// Multiply(4,5);

// let Subtract = (a,b) => {
//     return a-b;
// }
// console.log(Subtract(10,4));

// function CheckEven(num){
//     if(num%2 == 0){
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// CheckEven(5);

// let largest = function(a,b){
//     if(a>b){
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(largest(50,40))

// let isAdult = (age) => {
//     if(age>=18){
//         return "Adult";
//     } else {
//         return "Minor";
//     }
// }
// console.log(isAdult(20));

// function calculateTotal(price , quantity){
//     return price * quantity
// }
// console.log(calculateTotal(500,3));

// let grade = function(marks){
//     if(marks>=90){
//         return "A";
//     } else if (marks>=80) {
//         return "B";
//     } else if (marks>=70){
//         return "C";
//     } else {
//         return "Fail";
//     }
// }
// console.log(grade(95));

// let calculator = (num1 , num2 , operator) => {
//     if(operator === '+'){
//         return num1 + num2;
//     } else if(operator === '-'){
//         return num1 - num2;
//     } else if(operator === '*'){
//         return num1 * num2;
//     } else if(operator === '/'){
//         return num1 / num2;
//     } else {
//         return "Invalid Operator";
//     }
// }
// console.log(calculator(10,6,"+"))

// function findLargest(a,b,c){
//     if(a>b && a>c){
//         return a;
//     } else if(b>a && b>c){
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(findLargest(12,25,30));

// function countVowels(str) {
//     let count = 0;

//     for(let i = 0;i<str.length ; i++){
//         if(str[i]==="a" ||
//            str[i]==="e" ||
//            str[i]==="i" ||
//            str[i]==="o" ||
//            str[i]==="u"
//         ) {
//             count++
//         }
//     }
//     return count++
// }
// console.log(countVowels("hello"));

// let checkNumber = function(a){
//     if(a>0){
//         return "Positive";
//     } else if(a<0){
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }
// console.log(checkNumber(-50))

// let calculate = function (a, b, operator) {
//   if (operator == "+") {
//     return a + b;
//   } else if (operator == "-"){
//     return a - b;
//   } else if(operator == "*"){
//     return a * b;
//   } else if(operator=="/"){
//     return a/b;
//   } else {
//     return "Invalid operator"
//   }
// };
// console.log(calculate(20, 5, "+"));
// console.log(calculate(20, 5, "-"));
// console.log(calculate(20, 5, "*"));
// console.log(calculate(20, 5, "/"));

// let isEven = (a) => a%2 === 0

// console.log(isEven(6));

// let getDiscount = (price) => {
//     if(price>=5000){
//         return "20% discount"
//     } else if(price>=2000){
//         return "10% discount"
//     } else {
//         return "5% discount"
//     }
// }
// console.log(getDiscount(2000));

// function getResult(marks){
//     if(marks>=90){
//         return "excellent";
//     } else if(marks>=75){
//         return "good"
//     } else if(marks>=50){
//         return "average";
//     } else {
//         return "fail";
//     }
// }
// console.log(getResult(40))

// let cube = (a) =>{
//     console.log(a*a*a)
// }
// cube(6);

// let getBill = function (price , quantity , tax){
//     let total = price * quantity;
//     let taxAmount = total * tax/100;
//     let finalBill = total + taxAmount;

//     return finalBill;
// }
// console.log(getBill(1000,2,17));

