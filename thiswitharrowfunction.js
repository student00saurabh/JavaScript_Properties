const student = {
    name: "Saurabh Mishra",
    age: 20,
    prop: this,
    getName: function(){
        console.log(this);
        return this.name;
    },
    getAge: () => {
        console.log(this);
        return  this.age;
    },

    getInfo1: function(){
       setTimeout(( )=> {
          console.log(this);
       },2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this);
        },2000);
    },
};