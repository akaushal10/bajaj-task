const express=require('express');
const http=require('http');
const bodyParser = require("body-parser");
const evenOddRouter = require("./evenOddRouter");
const hostname="0.0.0.0";
const port = process.env.PORT || 5000;
const app=express();
app.use('/bfhl',evenOddRouter)
app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(`<html>
    <title>Bajaj Task</title>
    <body>
      <h1>Use Post Method on this API</h1>
      <p>https://bajaj-task.herokuapp.com/bfhl</p>
    </body>
    </html>`)
});

const server =http.createServer(app);

server.listen(port,()=>{
    console.log("Server Running")
})