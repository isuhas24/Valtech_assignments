
// file to obtain user data from pug file i.e "index.pug" and store it in json file named "pugOutputData.json"

const express=require("express");
const app=express();
const fs=require("node:fs");
const pugOutputData=require("./pugOutputData.json");

app.use(express.urlencoded({extended:true}));

//object to store avengers data
var avengersObj={};

//variables to store the each avengers data
var title=null,firstname=null,lastname=null,power=null,city=null;

app.get("/", (req,res) => {
    res.render("index.pug")
})

app.post("/", (req,res) => {
    avengersObj={};
    title=req.body.heroTitle;
    firstname=req.body.heroFirstName;
    lastname=req.body.heroLastName;
    power=req.body.heroPower;
    city=req.body.heroCity;
    avengersObj={
        "title":title,
        "firstname":firstname,
        "lastname":lastname,
        "power":power,
        "city":city
    }
    pugOutputData.avengers.push(avengersObj);
    fs.writeFileSync("pugOutputData.json",JSON.stringify(pugOutputData),"utf-8")
    res.redirect("/")
})

app.listen(1010,"localhost",function(error){
    if(error){
        console.log("error:",error);
    }
    else{
        console.log("server running on port number 1010");
    }
})