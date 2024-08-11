console.log("Hello World!");
let a = 10;
let b = 20;
console.log("Sum = ",a+b);
let pencile = 10;
let erasor = 5;
let output = "the total price is :" + (pencile + erasor) +"Rupees";
console.log("the total price is :",pencile+erasor,"Rupees");
console.log(output);
let output1 = (`the total sum : ${pencile+erasor}Rupees`);
console.log(output1);
let age = 20;
console.log(age>18); //True

let str = "ap";
 n = str.length;
 console.log(n+" "+str);
 if((str[0] == "a")&& (n>3)){
    console.log("Good String ");
 }
 else {
    console.log("Not a good string ");
 }
// Trim methode in String 
let password = "  abc ";
 new1 = password.trim();
 console.log(new1);
 console.log(password);


//  Strings are Immutable
let name2 = "Saurabh mishra ";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());


//  indexOf methiode
let me = "I Love String";
me.indexOf("Love");
me.indexOf("S");
console.log(me.indexOf("Love"));

// slice in javaScript 
let str1 = "ILoveCoding";
str1.slice(5);
console.log(str1.slice(5));
console.log(str1.slice(1,5));
