function Student(){
    let name = "Saurabh Mishra";
    console.log(name);
    function  education(){//Nested Function 
        let edu = "B.Tech";
        console.log(name);//laxical scope
        console.log(edu);
    }
    education();
    console.log(edu);
}
console.log("fst");
Student();
console.log("scnd");
education();
console.log("therd");
Student(education());