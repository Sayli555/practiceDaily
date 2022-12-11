const fs=require("fs");


// fs.mkdir("async.txt",(err,data)=>{
//     console.log(err)
// })

// fs.writeFile("async.txt/demo.txt","add data",(err,data)=>{
//     console.log(data)
// })


// fs.appendFile("async.txt/demo.txt"," add more data",(err,data)=>{
//     console.log(data)
// })

// fs.readFile("async.txt/demo.txt","utf8",(err,data)=>{
//     console.log(data,err)
// })

// fs.rename("async.txt/demo.txt","async.txt/newdemo.txt",(err,data)=>{
//     console.log(err)
// })

fs.unlink("async.txt/newdemo.txt",(err,data)=>{
    console.log(err,data)
})