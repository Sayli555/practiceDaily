// **array

// *********************rest***************************
const addNumber=(a,b,c,...x)=>{
   // console.log(x)
   x.map((e)=>(
    console.log(e)
   ))
    return a+b+c
}

const ans=addNumber(1,2,3,4,5,6);
console.log(ans)

// ***********************spread**************************

let arr=["sayli","mona","savita"];

function getname(n1,n2,n3){
    console.log(n1,n2,n3)
}
getname(...arr)


//**object */