const express = require("express");

const app= express();

app.get("/",function(req,res){
    res.send("<h1> hello world </h1>");
});
app.get("/about",function(req,res){
    res.send("name: himanshu yadav /n final year student at VNIT ");
});

app.listen(3000,function(){
    console.log("server started on port 3000 ");
});