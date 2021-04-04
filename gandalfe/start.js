
console.log("\x1b[36m%s\x1b[0m","Gandalfe Language Build ...");
console.log("Version: 0.0.12 Alpha");             



const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const re = path.join(__dirname, '../index.gan')
let fileContent = fs.readFileSync(re, "utf8");
let osApp = null;


switch(process.platform){

  case "win32": osApp = './gandalfe/gandalfe-lang.exe'
  case "linux": osApp = './gandalfe/gandalfe-lang.dll'
  case "darwin": osApp = './gandalfe/gandalfe-lang.dll'
  default: osApp = './gandalfe/gandalfe-lang.exe'
}

  fs.writeFile("./gandalfe/code.gondor", fileContent, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("\x1b[36m%s\x1b[0m","Programing code compiling ...");
    console.log("\x1b[42m%s\x1b[0m","          COMPILE SUCCESS          ");
    //console.log("\x1b[41m%s\x1b[0m","          COMPILE ERROR          ");
  }); 
  
  var fun =function() {
      child_process.execFile(osApp, function(err, data) {
    
        console.log(err)
        console.log(data.toString());
      });
    
    }
    fun();

 