// let count = 0;

// const interval = setInterval(()=>{
//     count++
//     console.log(count)
//     if(count===5){
//         clearInterval(interval)
//     }
// },2000)

console.log("1")

console.log("2")

setTimeout(() => {
    console.log("3")
}, 0);

console.log("4")

queueMicrotask(()=>{
    console.log("5");
});

console.log("6");

setTimeout(() => {
    console.log("7")
}, 0);

Promise.resolve().then(()=>{
    console.log("8")
});

console.log("9")