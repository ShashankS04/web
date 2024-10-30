import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app=express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
var bandName="";
function logger(req,res, next){
  bandName=req.body["street"]+" "+req.body["pet"];
  next();
}

app.use(logger);

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",(req,res)=>{
  res.send(`<h1>Band name: ${bandName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
