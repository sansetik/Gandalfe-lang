console.log("\x1b[36m%s\x1b[0m","___________________________");
console.log("\x1b[36m%s\x1b[0m","                           ");
console.log("\x1b[36m%s\x1b[0m","Gandalfe Language Build ...");
console.log("Version: 0.0.14.1 Alpha - Author: MiniKurka (sansetik)");    
console.log("\x1b[36m%s\x1b[0m","___________________________");    
console.log("\x1b[36m%s\x1b[0m","                           ");      



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
  }); 
  
  var fun =function() {
      child_process.execFile(osApp, function(err, data) {
    
        if(err) console.log(err)
        console.log(data.toString());
      });
    
    }
    fun();

 