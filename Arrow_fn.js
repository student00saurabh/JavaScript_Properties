const sum =(a,b)=>{
    console.log(a+b);
}
const multiplication = (a,b) =>{
    console.log(a*b);
}
const power = (a,b) => {
    console.log(a**b);
}
sum(2,4);
multiplication(2,4);
power(2,4);
// in case of single parameter we can remove pairenyhesis but
//in case of null parameter we can't remove paren thesis 
const number = n =>{
    console.log("NUmber is  = ",n);
}
const says = () =>{
     console.log("Hello! ");
}
number(3);
says();

//we can Arrow functions implisit type 
//Example===>>
const s = (a,b) => a+b;
const m = (a,b) =>(a*b);
const d = (a,b) => a/b;
console.log(s(2,4));
console.log(m(4,4));
console.log(d(4,2));
