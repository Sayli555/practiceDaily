//****************************** */ clause function example *********************************//

// usefull for memmorization ;

// application :- debouncing, throtteling



// function outer(){
//    var a=10;
//    return function inner(b){
//     return a+b
//     }
// }

// var fn=outer();
// console.log(fn(5));


// function outer(a){
//     return function inner(b){
//         return a+b
//     }
// }

// console.log(outer(5)(10))  // this writing techniq call currying



// function calculator(init=0){    // store the previous value; 
//     var value=init;

//     function add(val){
//         value=value+val;
//         return value
//     }
//     return {add}
// }

// var cal=calculator();

// console.log(cal.add(5));
// console.log(cal.add(5));





