// let rows = 5;
// let star = 0;

// for(let i = 1;i<=rows ; i++){ // i=1 1<=5 T || i=2 2<=5 T
//     star++ // 1 // 2
//     let line = ''; // line=''
//     for(let j = 1;j<=star ; j++){ // j=1 1<=2 T || j=2 2<=2 T || j=3 3<=2 F
//         line = line + '*'; // line = *
//     }
//     console.log(line);
// }

// let rows = 5;
// let star = 6;

// for(let i = 1 ; i<=rows ; i++){
//     star--
//     let line = '';
//     for(let j = 1;j<=star ; j++){
//         line = line + '*';
//     }
//     console.log(line);
// }

// let star = 6;
// let space = -1;

// for (let i = 1; i <= 5; i++) {
//   star--;
//   space++;
//   let line = "";
//   for (let j = 1; j <= space; j++) {
//     line = line + "";
//   }
//   for (let j = 1; j <= star; j++) {
//     line = line + "*";
//   }
//   console.log(line);
// }

// let rows = 4;
// let star = 9;
// let space = -1;

// for(let i = 1; i<=rows ; i++){
//     star-=2
//     space++
//     let line = '';
//     for(let j = 1;j<=space ; j++){
//        line = line + ' ';
//     }
//     for(let j = 1;j<=star ; j++){
//         line = line + '*'
//     }
//     console.log(line);
// }

// let rows = 5;

// for(let i = 1;i<=rows;i++){
//     let line = ' '
//     for(let j = 1;j<=5 ; j++){
//         if(i==1 || i==5 || j==1 || j==5){
//             line = line + "*"
//         } else {
//             line = line + " "
//         }
//     }
//     console.log(line);
// }

// let rows = 9;
// let star = -1;
// let space = 5;

// for(let i = 1;i<=rows ; i++){
//     if(i<=5){
//         star+=2
//         space--
//     } else {
//         star-=2
//         space++
//     }
//     let line = ""
//     for(let j = 1;j<=space;j++){
//         line = line + " "
//     }
//     for(let j = 1;j<=star;j++){
//         line = line + '*'
//     }
//     console.log(line)
// }

// let num = 1
// for(let i=1;i<=5;i++){

//     let line = ''
//     for(let j=1;j<=i;j++){
//         line = line + num
//         num++;
//     }
//     console.log(line);
// }

// for(let i=1;i<=5;i++){
//     let charcode = 65;
//     let line = ''
//     for(let j=1;j<=i;j++){
//         line = line + String.fromCharCode(charcode);
//         charcode++;
//     }
//     console.log(line);
// }

// for(let i=1;i<=5;i++){
//     let charcode = 97;
//     let line = ''
//     for(let j=1;j<=i;j++){
//         line = line + String.fromCharCode(charcode);
//         charcode++;
//     }
//     console.log(line);
// }