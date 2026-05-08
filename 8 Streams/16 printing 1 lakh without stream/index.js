import fs from "fs";


//! using file descriptor default: 35.532ms , 29ms 
let fd = fs.openSync("couting.txt", "w");
console.time();
for (let i = 1; i <= 10000; i++) {
  fs.writeSync(fd, `${i} \n`, (err, dataLength, data) => {});
  if (i === 10000) {
    console.timeEnd();
  }
}
fs.closeSync(fd) // to close the file



//* both are taking similar time, and both are flutuating froom 30ms to 100ms 



//! using streams (default: 40.657ms, default: 33.907ms)
// let writeStream = fs.createWriteStream("countingStream.txt")
// console.time();
// for(let i = 1 ; i<= 10000; i++){
//     writeStream.write(`${i} \n`)
// }
// writeStream.end();
// writeStream.on("finish", ()=> {
//     console.timeEnd()
// })