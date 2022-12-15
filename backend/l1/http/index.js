

const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("home")
    }
    if(req.url=="/about"){
        res.end("about")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404</h1>")
    }

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("port 8000")
})

