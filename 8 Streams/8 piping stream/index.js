import { time, timeEnd } from "console";
import fs from "fs";

// memory : 91%
// cpu : 90 %
// disk : 10%
const readStream = fs.createReadStream(
  "C:\\Users\\sujal\\OneDrive\\Desktop\\movie.mkv",
  { highWaterMark: 1 *1024 * 1024 }
);

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   fs.appendFileSync("movie.mkv", chunk);
// });





//? writable stream  
// memory : 91%
// cpu : 50 %
// disk : 10%
// console.time();
const writeStream = fs.createWriteStream("movie2.mkv");

// readStream.on("data", (chunk) => {
//   const isEmpty = writeStream.write(chunk);
//   if (!isEmpty) {
//     readStream.pause();
//   }
// });

// writeStream.on("drain", () => {
//   readStream.resume();
// });

// console.timeEnd();




// writing data using pipe 
readStream.pipe(writeStream) // (start transfer data) readfrom readable stream & write using write stream , with backpressure 

setTimeout(() => {
    readStream.unpipe(writeStream)
}, 10000);