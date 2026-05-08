import http from "http";
import fs from "fs/promises"

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  // res.setHeader("Content-Type", "text/txt"); // for text file 
  // res.setHeader("Content-Type", "image/webp"); // for image
  res.setHeader("Content-Type", "video/mp4"); // for video
  res.setHeader("Content-Disposition", "attachment; filename=dilwale.mkv")

  // console.log(req, res) // req is readAbleStream , res is writeableStream
  // let handleReadStream = fs.open("app.js")
  // let handleReadStream = fs.open("./river.webp")
  let handleReadStream = fs.open("C:\\Users\\sujal\\OneDrive\\Desktop\\movie.mkv")
  const {size} = await (await handleReadStream).stat();
  res.setHeader("Content-Length", size)
  // let readStream = (await handleReadStream).createReadStream({highWaterMark : 1});  // make sure for image increase it to 1000
  let readStream = (await handleReadStream).createReadStream({highWaterMark : 10 * 1024 * 1024});  //10mb 

  
  readStream.on("data", (chunk) => {
    res.write(chunk)
    readStream.pause(); 
    setTimeout(() => {
      readStream.resume();
    }, 10);  // download chunk in this milisecond time 

  })
  // res.end("World"); // if we write it then res.write will not work, res.end will print
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});

console.log("hell0!");
