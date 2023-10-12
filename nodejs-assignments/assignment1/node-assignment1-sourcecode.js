const fs=require("node:fs");

const herolist=require("./herolist.json");
const output=require("./output.json");
const cities=require("./cities.json");

var heroTitle=null,heroPower=null,heroCity=null,heroPoster=null;

//this array contains all the files present in the directory
var fileArr=fs.readdirSync("heroes");
// console.log(fileArr);


for(let i=0;i<herolist.length;i++){
    heroPoster=null;
    heroTitle=herolist[i].toLowerCase();

    //loop through fileArr array to find matching filename with heroTitle
    fileArr.forEach(function(file){
        // console.log(file);

        //if filename matches with heroTitle then obtain filename
        //code block to seperate filename from its extension
        let tempFile="";
        for(let i=0;i<file.length;i++){
            if(file.charAt(i)==="."){
                break;
            }
            tempFile+=file.charAt(i);
        }

        //compare if obtained filename without its extension is equal to heroTitle

        if(tempFile==heroTitle){
            heroPoster=file;
        }
    })

    //check if heroPoster is still null
    if(heroPoster==null){
        heroPoster="file not found"
    }

    heroPower=Math.round(Math.random()*herolist.length);
    heroCity=cities[Math.round(Math.random()*cities.length)];

    output.avengers.push({"title":heroTitle,"city":heroCity,"power":heroPower,"poster":heroPoster});
    fs.writeFileSync("output.json",JSON.stringify(output),"utf-8");
}