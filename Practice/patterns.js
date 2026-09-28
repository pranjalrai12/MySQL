// * * * *
// * * * *
// * * * *
// * * * *

// let rows = 4;
// let star = 5;

// for (let i = 1; i <= rows; i++) {

//     let line = '';

//     for (let j = 1; j <= star; j++) {
//         line = line + "*";
//     }

//     console.log(line);
// }

// *
// * *
// * * *
// * * * *
// * * * * *

// let rows = 5;

// for(let i = 1;i<=rows ; i++){
//     let line = ''

//     for(let j = 1;j<=i;j++){
//       line = line + "*"
//     }
//     console.log(line);
// }

// * * * * *
// * * * *
// * * *
// * *
// *

// let rows = 5
// let star = 6;

// for(let i = 1;i<=rows;i++){
//     let line = ''
//     star--

//     for(let j = 1;j<=star;j++){
//         line = line + "*"
//     }
//     console.log(line);
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let rows = 5

// for(let i = 1;i<=rows;i++){
//     let line = ''

//     for(let j = 1 ; j<=i ;j++){   
//        line = line + j
//     }
//     console.log(line)
// }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let rows = 5

// for(let i = 1;i<=rows ; i++){
//     let line = ''

//     for(let j = 1;j<=i ; j++){
//         line = line + i
//     }
//     console.log(line)
// }

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// let rows = 5

// for(let i = 1;i<=rows;i++){
//     let line = ''

//     for(let j = 1;j<=rows - i + 1;j++){
//        line = line + j + " "
//     }
//     console.log(line)
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let rows = 5;
// let num = 1;

// for(let i = 1;i<=rows ; i++){
//     let line = ''

//     for(let j = 1;j<=i ; j++){
//       line = line + num
//       num++
//     }
//     console.log(line)
// }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let line = "";

//     // spaces
//     for (let j = 1; j <= rows - i; j++) {
//         line = line + " ";
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         line = line + "* ";
//     }

//     console.log(line);
// }

//     *
//    * *
//   *   *
//  *     *
// *********

// let rows = 5;
// let space = 5;
// let star = 0;

// for(let i = 1;i<=rows;i++){
//     space--
//     star++
//     let line = ''

//     for(let j = 1;j<=space;j++){
//         line = line + ' '

//         for(let j = 1;j<=star;j++){
//             line = line + "*"
//         }
//     }
//     console.log(line);
// }

// *
// **
// ***
// ****
// *****

// for(let i = 1;i<=5;i++){

//     let line = ''

//     for(let j = 1;j<=i ; j++){
//         line = line + '*';
//     }
//     console.log(line)
// }

// *****
// ****
// ***
// **
// *

// let rows = 5;

// for(let i = 1;i<=rows;i++){

//     let line = ''

//     for(let j = 1; j<=rows-i+1;j++){
//         line = line + '*'
//     }
//     console.log(line);
// }

//     *
//    ***
//   *****
//  *******
// *********

let rows = 5;

for(let i = 1 ; i<=rows ; i++){
    let line = ""

    for(let j = 1;j<=rows-i;j++){
        line = line + " "
    }
      for(let j = 1;j<=2*i-1;j++){
            line = line + "*"
        }
    console.log(line)
}

