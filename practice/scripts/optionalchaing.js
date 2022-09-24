
const person={
    name:"sayli",
    city:"Pune",
    vehical:{
        year:2022,
        warenty:{
            year:2050
        },
        getvalue:function(){
            console.log("30 year warenty")
        }
    }
}
// if this vehical object is not present then its showing us undefined insted of showing vehical not defined erroe


// let y = person.vehical?.year;
// console.log(y);


// let w=person.vehical?.warenty?.year;
// console.log(w);

// let v=person.vehical?.getvalue?.();

// console.log(v);


// if we want to give default value then we use "nulish coalscing opertor (??)";


let ans=person.vehical?.name ?? "sayli" ;

console.log(ans)
