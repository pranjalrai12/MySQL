// Method of string -

// toUpperCase()
// toLowerCase()
// startsWith()
// endsWith()
// repeat()
// split()
// trim()
// indexOf()
// slice()
// subString()

// let str = 'DeBugShala'
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str1 = "indore to ujjain"
// console.log(str1.startsWith("indore"))
// console.log(str1.endsWith("ujjain"))

// console.log(str1.repeat(5));

// Split() :-
// let str3 = "debugshala";
// console.log(str3.split('').reverse().join(''));

// let str4 = "debugshala"
// let rev = ""
// for(let i = 0;i<str4.length;i++){
//     rev = str4[i] + rev
// }
// console.log(rev)

// trim() :- remove the whitespace from the begining
// let str5 = "        debugshala"
// console.log(str5.trim());
// console.log(str5)

// let str6 = "pranjal"
// console.log(str6.indexOf('a'));


// slice - extract the part of the string . it accept negative value
// substring - extract the part of the string . it wont accept negative index

// let str = "debugshala"
// console.log(str.substring(1,4));
// console.log(str.slice(-6,-1));

// find the occurence of each character in string 
// find the duplicate character in string

// let str = "debugshala"

// for(let i = 0;i<str.length;i++){
//     let count = 0;
//     for(let j = 0;j<str.length;j++){
//        if(str[i]==str[j],i<j){
//         break;
//        }
//        if(str[i]==str[j]){
//         count++
//        }
//     }
//     if(count>0){
//         console.log(str[i] + " occurence of the character",count)
//     }
// }

// let str = "madam";
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// if (str === reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }