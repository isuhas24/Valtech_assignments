// import the required libraries
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");

// create a express app
let app = express();

// middlewares
app.use(express.json());
app.use(cors());

const url = `mongodb+srv://${config.dbuser}:${config.dbpass}@cluster0.${config.dbstring}.mongodb.net/${config.dbname}?retryWrites=true&w=majority`;

// creating mongodb schema
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : String
}));

// connecting to mongoDB
mongoose.connect(url)
.then(res => console.log("db connected successfully"))
.catch(err => console.log(err));

// creating routes

//READ
app.get("/data", (req, res) => {
    User.find()
    .then(dbres => res.status(200).json(dbres))
    .catch(err => console.log(err));
})

//CREATE
app.post("/data", (req, res) => {
    let user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email
    });
    user.save()
    .then(dbres => res.status(200).send({message : dbres.firstname+" added successfully"}))
    .catch(err => console.log(err));
});

//UPDATE
app.get("/edit/:id", (req, res) => {
    User.findById({ _id : req.params["id"]})
    .then(dbres => res.status(200).send(dbres))
    .catch(err => console.log(err));
});

app.post("/edit/:id", (req, res) => {
    User.findByIdAndUpdate({_id : req.params.id}, req.body)
    .then((dbres) => res.status(200).send({message : dbres.firstname+" data updated"}))
    .catch((err) => console.log(err));
})

// setting up port and host
app.listen(config.port, config.host, (err) => {
    if(err){
        console.log(err, "is the error");
    }
    else{
        console.log(`server is now on port number ${config.port} in ${config.host}`);
    }
});
