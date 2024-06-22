const fs = require("fs");
// fs.writeFile("Karam.txt", "Hello boys!", (err) => {
//   if (err) {
//     console.log("Error while writeFile operation at line:2");
//   } else {
//     console.log("Done!");
//   }
// });

// fs.appendFile("Karam.txt", "\nYes boi!", (err) => {
//   if (err) {
//     console.log("Error while writeFile operation at line:2");
//   } else {
//     console.log("Done!");
//   }
// });

// fs.readFile("Karam.txt","utf-8", function (err, data) {
//   if (err) {
//     console.log("Error at line 11");
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("Karam.txt","Test.txt",(err)=>{
//     if(err){console.log(err)}
//     else{console.log("Done! Check the file name!")}
// })

// fs.copyFile("Test.txt","New_Test.txt",(err)=>{
//     if(err){console.log(err.message)}
//     else{console.log("Done! Check the new file !")}
// });

// fs.unlink("New_Test.txt", (err) => {              //For Deletion of a file
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Deleted!");
//   }
// });

// fs.mkdir("./Karam/Hello.txt", { recursive: true }, (err) => {
//   if (err) console.log(err.message);
//   else console.log("Done!");
// });

// fs.readdir("./Karam","utf8",(err,files)=>{                               //Will output a list containing the file names inside that folder
//     if (err) console.log(err.message);
//    else console.log("Done!\n",files);
// })