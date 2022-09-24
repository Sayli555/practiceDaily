
async function getdata(){
    console.log("inside function");         //2.call

    let res=await fetch("https://api.github.com/users"); //3. come heare but seen await and going to remainng previous calls
    console.log("after fetch")          //5.call
    res=await res.json();               //6 see this await
    console.log("after json store");        //7.but only pending promise remaing so call this

    return res
}

console.log("outside of function");  //first this function call
let a=getdata();
a.then((r)=>console.log(r))     //8.call this function
console.log(a);                 //4.after seen await     
