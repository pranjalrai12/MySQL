// Methods of array :-

// let arr = [1,2,3,"hy",true,100]

// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// Push :-

// let arr = [1,2,3,"hy",true,100]
// arr.push(100,100)
// console.log(arr)

// Pop :-

// let arr = [1,2,3,"hy",true,100]
// arr.pop(100)
// console.log(arr)

// Shift :-

// let arr2 = [1,2,3,"hy",true,100]
// console.log(arr2.shift())

// let arrr = arr2.shift()
// console.log(arr2);

// unshift 

// let arr3 = [1,2,3,"hy",true,100]
// arr3.unshift(100,200,300)
// console.log(arr3)

// Slicing

// let arr4 = [1,2,3,"hy",true,100]
// console.log(arr4.slice(1,4));

// Splice :-

// Syntax :- splice(start index,deletCount,ele1,ele2,ele3)
// let arr5 = [1,2,3,"hy",true,100]
// arr5.splice(1,3,1000,2000,3000,4000,5000)
// console.log(arr5)

// indexOf() :-

// let arr6 = [1,2,3,4,5,6,7]
// console.log(arr6.indexOf(6));

// includes :- 

// let arr7 = [1,2,3,4,5,6,7]
// console.log(arr7.includes(4));

// ======================================================================

// Iteration methods :-

// forEach :- value , index , array

// let arr8 = [1,2,3,4,5,6,7]
// arr8.forEach((value,index ,array)=> {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });

// for of :- values and string 

// let arr9 = [1,2,3,4,5,6,7]
// for(let value of arr9){
//     console.log(value);
// }

// let str = "hellodebugshala"
// for(let value of str){
//     console.log(value)
// }

// for in :- it gives the index of each element

// let str = ["apple","mango","orange"]
// for(let index in str){
//     console.log(index);
// }

// let person = {
//     age : 35,
//     address : "indore"
// }
// for(let keys in person){
//     console.log(keys);
// }

// Map :- it return the value in the new array.

// let arr9 = [1,2,3,4,5,6]
// let map1 = arr9.map((v)=>{
//     return v*2
// })
// console.log(map1)

// filter :- it will return the element who satisfied the condition.

// let arr10 = [1,2,3,4,5,6]
// let filter1 = arr10.filter((v)=>{
//     return v%2==0
// })
// console.log(filter1)

// find :- return the first occurence who satisfied the condition.

// let arr11 = [1,2,3,4,5,6,7]
// let find1 = arr11.find((v)=>{
//     return v%2==0
// })
// console.log(find1)

// findIndex :-
// let arr12 = [1,2,3,4,5,6,7]
// let findindex1 = arr12.findIndex((v)=>{
//     return v%2==0
// })
// console.log(findindex1)

// reduce :- it will return single value
// let arr13 = [1,2,3,4,5,6,7]
// let red = arr13.reduce((total,value)=>{return total*value},1)
// console.log(red)

// some :-
// let arr14 = [1,3,5,7,2]
// let some1 = arr14.some((value)=>{
//     return value%2==0;
// })
// console.log(some1)

// Every :-
// let arr14 = [1,3,5,7,2]
// let every1 = arr14.every((value)=>{
//     return value%2==0;
// })
// console.log(every1)

// reverse :-
// let arr14 = [4,3,5,2,1,7]
// console.log(arr14.reverse())

// Sort :- asc and desc
// positive -> swap
// negative -> no swap

// let arr15 = [4,3,5,2,1,7]
// let sort1 = arr15.sort((a,b)=>{
//     return a-b;
// })
// console.log(sort1)

// flat :- nested array
// let arr16 = [1,2,3,[4,5],100,[200,"hy"]]
// let flat1 = arr16.flat(Infinity)
// console.log(flat1);
// console.log(arr16.flat(Infinity));

// fill :- Syntax :- (value,start,end) - end exclude
// let arr17 = [1,2,3,4]
// let fill1 = arr17.fill(100,1,3)
// console.log(fill1)

// Reverse the array
// let arr = [1,2,3,4,5]
// let newArr = [];

// for(let i = 0;i<arr.length;i++){
//    newArr.unshift(arr[i])
// }
// console.log(newArr);

// Another method
// let arr = [1,2,3,4,5]
// let newArr = [];

// for(let i =arr.length-1;i>=0;i--){
//    newArr.push(arr[i])
// }
// console.log(newArr)

// Sort the array using the bubble sort :-

// let arr = [2,1,3,5,6,4]

// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// let arr = [1,2,5,2,6,6,2,4,1,4,5]
// // let arr = [1,2,5,2,6,6,2,4,1,4,5]

// for(let i = 0;i<=arr.length;i++){
//     let count = 0;
//     for(let j = 0;j<=arr.length;j++){
//         if(arr[i]==arr[j] && i>j){
//             break;
//         }
//         if(arr[i]==arr[j]){
//             count++;
//         }
//     }
//     if(count>0){
//         console.log(arr[i]+ " occurence of element",count);
//     }
// }

// let arr = [1,2,5,2,6,6,2,4,1,4,5,10]
// let arr1 = [];
// // let arr = [1,2,5,2,6,6,2,4,1,4,5]

// for(let i = 0;i<=arr.length;i++){
//     let count = 0;
//     for(let j = 0;j<=arr.length;j++){
//         if(arr[i]==arr[j] && i>j){
//             break;
//         }
//         if(arr[i]==arr[j]){
//             count++;
//         }
//     }
//     if(count>1){
//         // console.log(arr[i]+ " duplicate element");
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1);

// find the maximum element from the array
// let arr = [1,4,2,65,34,87]
// let max = arr[0]

// for(let i = 1;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)


// find the minimum element from the array
// let arr = [1,4,2,65,34,87]
// let min = arr[0]

// for(let i = 1;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min)