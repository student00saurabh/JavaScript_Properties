let arr = [1,2,3,4,5];

// forEach method in array

arr.forEach(function(el){
    console.log(el);
});

function print(el){
    console.log(el);
};
arr.forEach(print);

//map method in array 
console.log("Map in Array");
let double = arr.map(function(el){
    return el*2;
});

double.forEach(function(el){
    console.log(el);
});

//filter function in Array

let num = [1,4,5,6, 8,,9,11,23,44,32,13,51];
let even = num.filter((num )=>(num%2 ==0));
console.log("Filter method");
even.forEach(function(el){
    console.log(el);
});

console.log("fileter");

let odd = num.filter((el)=>{
    return el%2!=0;
});

// Reduce method in Array
console.log("Reduce Method")

let a = [1,2,3,4];
let b = a.reduce((res, el) => (res+el));
console.log(b);

// maximum number

console.log("max number withoud using reduse method");
let array = [1,2,4,9,6,2,3];
let max = 0;
for(let i = 0; i<array.length; i++){
    if(max <  array[i]){
        max = array[i];
    }
}
console.log(max);

console.log("max number using reduse method");

let min = array.reduce((min, el) => {
      if(min > el){
        return el;
      }else{
        return min;
      }
});

console.log(min);

// Question miltiple of 10 in array

let que1 = [10,20,30,40,50];

let ans1 = que1.every((el) => el % 10 == 0);
console.log(ans1);

// Default parameter

function sum(a,b = 2){
    return a+b;
}

console.log(sum(2,4));
console.log(sum(3));

// spread function in javascript 
 console.log("spread funvtion ")
console.log(...que1);

console.log(Math.min(...que1));
console.log(Math.max(...que1));

// Restmethod in javascript 
console.log("Rest function ");
function args(...arg){
   for(let i = 0; i<arg.length; i++){
    console.log("You have interd :",arg[i]);
   }
}

args(1,2,3,4,5);

//more about rest function 
console.log("abcd")
function sum123(...a){
    return a.reduce((sum, el) => sum+el);
}

console.log(sum123(1,2,3,4,5,6,7));
console.log("asd")
function min123(msg, ...arg){
    console.log(msg)
    return arg.reduce((min,el) => {
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
}

console.log(min123(12,15,6,7,8,9,122,34));

// Destructuring method in javascript 

let des_name = ["Saurabh", "Shiva", "Bhole","Anuj", "Shivansh", "komal", "Sonal"];
//for storing names in anothor variable we use this method 
let [winner, runner, secrunner, ...other] = des_name;
console.log(winner, runner, secrunner);
console.log(other);

//Destructuring method for objects 
const student1 = {
   name:"Saurabh",
   age: 20,
   id: "student00",
   password: "sam123",
   city:"pratapgarh",
   place: "Sangipur",
}

let {name,age} = student1;
console.log(name, age);

let {name: user, age: year, city="Alahabad", place123 = "usmanpur"} = student1;

console.log(user,year,city, place123);