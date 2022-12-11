const fs=require('fs');
// fs.writeFileSync("demo.js","its for practice")

// fs.appendFileSync("demo.js"," exstra things add")

// const store=fs.readFileSync("demo.js").toString();
// console.log(store);

// fs.mkdirSync("demo")

// fs.writeFileSync("demo/demo.js","in folter demo file")

// fs.appendFileSync("demo/demo.js","append more data")

// const data=fs.readFileSync("demo/demo.js","utf8");
// console.log(data)

// fs.renameSync("demo/demo.js","demo/newdemo.js");

fs.unlinkSync("demo/newdemo.js")