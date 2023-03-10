const express = require("express");
const bodyParser = require("body-parser");

const app =  express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

var listItem=[];

app.get("/" , function(req , res){
    var today = new Date();

    var options = {
        weekday: "long" , 
        day: "numeric" , 
        month: "long"
    }

    var day = today.toLocaleDateString("en-us" , options);

    res.render("list",{
        weekDay : day , 
        list : listItem
    });
});

app.post("/" , function(req,res){
    listItem.push(req.body.newItem);
    res.redirect("/");
});
















app.listen("3000",function(){
    console.log("server started on port 3000");
});