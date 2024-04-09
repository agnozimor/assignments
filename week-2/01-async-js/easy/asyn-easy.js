//1-counter
/*let count = 0;
function counter(){
    count++;
    console.log(count);
}
setInterval(counter,1000)*/
//2-counter
/*let count=0;
function counter(){
    count++;
    console.log(count);
    setTimeout(counter,1000);
}
counter();*/
//3-read file
/*const fs = require("fs");
fs.readFile("async.txt","utf-8",(err,data)=>{
    if(err){
        console.error("Error reading",err);
        return;
    }
    else{
        console.log(data);
    }
});*/
//4-Write to file
/*const fs = require("fs");
fs.writeFile("async-week1.txt","Added part",(err)=>{
    if(err){
        console.error("Error writing file: ",err);
        return;
    }
    console.log("Successfully written");
});
fs.readFile("async-week1.txt","utf-8",(err,data)=>{
    if(err){
        console.error("Error reading",err);
        return;
    }
    else{
        console.log(data);
    }
});*/
