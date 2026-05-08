import fs, { read } from "fs"
import { pipeline } from "stream";

const readStream = fs.createReadStream(
  "C:\\Users\\sujal\\OneDrive\\Desktop\\movie.mkv",
  { highWaterMark: 1 *1024 * 1024 }
);

const writeStream = fs.createWriteStream("movie2.mkv");


// writing data using pipe 
readStream.pipe(writeStream) // (start transfer data) readfrom readable stream & write using write stream , with backpressure 

setTimeout(() => {
    readStream.destroy("khatam !")  // it will show error, stop server !
},200)


//! if we want to run code then we've to use error method or pipline 

// using error method (to remove error , run code)
// readStream.on("error", (err) => {
//     console.log(err)
// })

// using pipline 
pipeline(readStream, writeStream, (err) => { // it can be read,write with error free 
    console.log(err)
})

