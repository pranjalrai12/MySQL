// const person = {
//     name : "pranjal",
//     age : 23
// }
// console.log(person)
// console.log(person.name)
// console.log(person.age)

// we can modify the object :
// add key and value 
// person.address = "indore";
// console.log(person);

// update :
// person.name = "jay";
// console.log(person);

// delete :
// delete person.age;
// console.log(person)

// =================================================

// Object methods :-

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Object.freeze(person);
// person.age = 34;
// console.log(person);

// Blueprint - make the structure and reuse it 
// this keyword :- point to the current object
// new :- object create 

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// let p = new Person("jayesh",23)
// console.log(p.name)
// console.log(p.age)


// class Car{
//     constructor(name,color,price){
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
// }
// let p = new Car("Alto-800","white",10)
// console.log(p.name);

// let data = [
//     {name:"raja",id:1,address:"Indore"},
//     {name:"jayesh",id:2,address:"rau"},
//     {name:"khushi",id:3,address:"Bhopal"}
// ]

// let result = data.find(person => person.name == "jayesh")
// console.log(result.address);

// let employees = [
//     {id:101,name: "raj",city: "indore"},
//     {id:102,name: "ankit",city: "bhopal"},
//     {id:103,name: "priya",city: "indore"},
//     {id:104,name: "neha",city: "dehli"}
// ];
// let ress = employees.filter(c => c.city == 'indore')
// console.log(ress)

// First way
// for(let i = 0;i<ress.length;i++){
//     console.log(ress[i].name)
// }

// second way
// console.log(ress[0].name)
// console.log(ress[1].name)

// let employees1 = [
//     {id:101,name: "raj",city: "indore"},
//     {id:102,name: "ankit",city: "bhopal"},
//     {id:103,name: "priya",city: "indore"},
//     {id:104,name: "neha",city: "dehli"}
// ];    

// let sal_incre = employees.map(employee => {
//     return {
//         ...employee,
//         salary : employee.salary+employee.salary*10/100
//     }
// })
// console.log(sal_incre);

// let products = [
//     {id:1,name:"laptop",price:60000},
//     {id:2,name:"mouse",price:800},
//     {id:3,name:"mobile",price:25000},
//     {id:4,name:"TV",price:70000},
// ];

// let expensiveProduct = products[0];

// for(let i=1;i<products.length;i++){
//     if(products[i].price > expensiveProduct.price){
//         expensiveProduct = products[i];
//     }
// }
// console.log(expensiveProduct.price);

// let tasks = [
//     {id:1,title:"learn javascript",completed:true},
//     {id:2,title:"build todo app",completed:false},
//     {id:3,title:"practice arrays",completed:false},
//     {id:4,title:"learn react",completed:true},
// ]

// let task = tasks.filter(c => c.completed == false)
// console.log(task)

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].completed === false) {
//         console.log(tasks[i]);
//     }
// }

// let orders = [
//     {id:1,customer:"rahul",amount:1200},
//     {id:2,customer:"aman",amount:800},
//     {id:3,customer:"rahul",amount:2500},
//     {id:4,customer:"neha",amount:1500},
//     {id:5,customer:"rahul",amount:1000},
// ]

// let total_spent = orders.filter(order => order.customer === "rahul")
// .reduce((sum,order)=> {return sum + order.amount},0)
// console.log(total_spent);

function Sum(...numbers){
    let sum1 = numbers.reduce((total = 0,number)=> total + number)
    console.log(sum1)
}
Sum(1,2,3,4)