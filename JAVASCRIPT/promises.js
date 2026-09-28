// const promise = new Promise((resolve, reject) => {
//   const ice_cream = true;

//   if (ice_cream === true) {
//     resolve("ice_cream mil gayi");
//   } else {
//     reject("nhi mili");
//   }
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("always run");
//   });

// function FetchPosts(){
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log("post data",data);
//     }).catch((err)=>{
//         console.log("fetching post data error",err)
//     })
// }

// function FetchComments(){
//     return fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log("comments data",data);
//     }).catch((err)=>{
//         console.log("fetching Comments data error",err)
//     })
// }

// FetchPosts().then(()=>{
//     FetchComments()
// })


// 1. Check the year is leap or not.
// 2. Reverse the string using the for loop.
// 3. Check the number is prime or not.
// 4. Sort the array without using the Method.
// 5. find the factorial of number using the arrow function.


// let year = 2024;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }

// let str = "pranjal"
// let rev = ""

// for(let i = str.length - 1;i >=0;i--){
//     rev += str[i]
// } 
// console.log(rev)

// let num = 7;
// let count = 0;

// for(let i = 1;i<=num;i++){
//     if(num % i == 0){
//         count++
//     }
// }
// if(count === 2){
//     console.log("it is a prime number")
// } else {
//     console.log("it is not a prime number")
// }

// let factorial = (num) => {
//    let fact = 1;

//    for(let i = 1;i<=num;i++){
//     fact =  fact * i
//    }
//    return fact;
// };

// console.log(factorial(5));

let arr = [5,2,8,1,3];

for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length-1;j++){
        if(arr[i]>arr[j+1]){;
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        }
    }
}

console.log(arr);