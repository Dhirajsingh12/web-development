// let firstName="dhiraj"
// let lastName="kumar"
// console.log(firstName);
// console.log(lastName);
// var age=50;
// var age=60;
// console.log(a);
// let income =340000;
//  income =250000;
// console.log(typeof income);
// const age=22;
// console.log(age);
// let student={
//     name:"dhiraj",
//     age:23,
//     cgpa:8.6,
//     ispass:true
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.cgpa);
// console.log(student.ispass);
// let pen={
//     name:"Parker jotter Standard Ct Ball Pen",
//     color:"black",
//     rating:4,
//     deal_of_the_day:true,
//     percent_offer:5,
//     price:270
// }
// console.log(pen.name); 
// console.log(pen.color);
// console.log(pen.rating);
// console.log(pen.deal_of_the_day);
// console.log(pen.percent_offer);
// console.log(pen.price);


// let a=9;
// let b=9;
// let sum=a+b;
// console.log(sum);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a**b); 
// console.log(++a);
// console.log(b++);
// let a="9";
// let b=5;
// // a+=b;
// // b-=a;
// console.log(a===b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a<=b);
// console.log(a>=b);
// let student={
//     name:"amit singh",
//     age:20,
//     college:"gniot",
//     branch:"cse",
//     home:"bihar",
//     district:"begusarai",
//     post:"bhairwar",
//     block:"bhairwar",
//     schooling:"bihar bord"
// }
// console.log(student.name);
// console.log(student.college);
// console.log(student.age);
// console.log(student.home);
// console.log(student.branch);
// console.log(student.post);
// console.log(student.district);
// let age=20;
// if (age>=18) {
//     console.log("you can drive the car");
    
// } else {
//     console.log("you can not drive the car")
    
// }
//  a=20;
//  b=10;
// let c= a>b ? (a-b) : (b-a);
// console.log(c);
// function sum(a,b){
//     return a+b
// }
// let result=sum(5,7);
// console.log("sum of two number:",result)
// let arr=[1,3,4,5,6]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr.length);
// arr.push("amit")
// console.log(arr)
// //random name generator
// let rand=Math.random()
// let first,second,third
// //first
// if (rand<0.33) {
//     first="creziy";
    
// }
// else if(rand<0.66 & rand>=0.33){
//     first="amizing"
// }
// else{
//     first="fire"
// }
// //second
// if (rand<0.33) {
//     second="angen";
    
// }
// else if(rand<0.66 & rand>=0.33){
//     second="food"
// }
// else{
//     second="fee"
// }
// //third
// if (rand<0.33) {
//     third="hub";
    
// }
// else if(rand<0.66 & rand>=0.33){
//     third="amazon"
// }
// else{
//     third="flipcard"
// }
// //console.log(`${first} ${second} ${third}`)
// //forth
// if (rand<0.33) {
//     let forth="hub";
    
// }
// else if(rand<0.66 & rand>=0.33){
//     forth="amazon"
// }
// else{
//     forth="flipcard"
// }
// console.log(`${first} ${second} ${third} ${forth}`)
// let a=prompt("enter the number");
// function factorial(number){
//     let arr=Array.from(Array(number+1).keys())
//     // console.log(arr.slice(1,))
//     let c=arr.slice(1,).reduce((a,b)=>{
//         return a*b;
//     })
//     return c
//     console.log(c)
// }
// factorial(a)
// console.log("hii")
// console.log("hello");
//  setTimeout(() => {
//     console.log("hello friends");
   
//  },2000);
//  console.log("hi friends")
//  console.log("this is promis");
//  let prom1=new Promise((resolve, reject) => 
//     {
//         let a= Math.random();
//             if (a<0.5) {
//                 reject("no random number not supported");
//             }
//             else{
//                 setTimeout(() => {
//                     console.log("done")
//                     resolve("dhiraj")
//                 }, 2000);
//             }
//         })
//  prom1.then((a) => {
//  }).catch ((err) => {
//    console.log(err);
//  })
 
// let a=prompt("enter the first number");
// let b=prompt("enter the second number");
// let sum=parseInt(a)+parseInt(b)
// console.log(sum);
// let obj={
//     a:1,
//     b:"dhiraj"
// }
// console.log(obj.a)

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    });
}

(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})();
