//1-File-cleaner
/*const fs = require("fs");
function cleanFile(){
    fs.readFile("med.txt","utf-8",(err,data)=>{
        if(err){
            console.error("Error reading the file: ",err);
            return;
        }
        const newString = data.replace(/\s+/g," ");
        fs.writeFile("med.txt",newString,(err,data)=>{
            if(err){
                console.log("Error writing: ",err);
                return;
            }
            console.log("Successfully written");
        });
    });
}
cleanFile();*/
let count=0;
function counter(){
    count++;
    console.log(count);
    setTimeout(counter,1000);
}
counter();