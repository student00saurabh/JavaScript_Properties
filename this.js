const student = {
    name : "Saurabh",
    age : 20,
    maths : 90,
    phy : 80,
    eng : 89,
    getAvg(){
         let avg = (this.math + this.phy + this.eng)/3;
         console.log(avg);
    }
}