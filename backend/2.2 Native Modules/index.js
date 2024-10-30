const fs= require("fs");

fs.writeFile("message.txt","Hello",(err)=>{
    if(err) throw err;
    console.log("message written to file");
});

fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});