const fs=require("fs")

const obj={
    name:"sayli",
    school:"masai"
}


const jsonobj=JSON.stringify(obj);
// console.log(jsonobj);

// fs.writeFile("obj.json",jsonobj,(err,data)=>{
//     console.log(err)
// })

fs.readFile("obj.json","utf8",(err,data)=>{
    console.log(data);
    data=JSON.parse(data);
    console.log(data);
})
