let calculator={
    'adding' : function(){
        let sum= this.number1+this.number2;
        console.log(sum);
    },


    'multiply': function(a,b){
        let multi=this.a * this.b;
        console.log(multi);
    },


    'dividing':function(){
        let divide= this.number1/this.num2;
        console.log(divide);
    },


    'subtract':function(){
        let diff=this.number1-this.number2;
        console.log(diff);
    },


};
let set1={
    'number1':70,
    'number2':50,
}
let set2={
    'a':10,
    'b':20,
}

let set3={
    'number1':30,
    'number2':20,
}
calculator.adding.call(set1);
calculator.multiply.apply(set2,['a','b']);
let bind=calculator.adding.bind(set3);
bind();
calculator.subtract.call(set1);
