import fs from "fs";

const writeStream = fs.createWriteStream("sujal.txt", { highWaterMark: 4 });

writeStream.write("sujal");
console.log(writeStream.writableLength);

writeStream.on("open", (fileDescriptor) => {
  console.log("fd :", fileDescriptor); // if we create a stream then it will create, if we don't end stream then it will available in our memeory , so we've to end our stream
});

writeStream.on("finish", () => {
  console.log("finished"); // this will not work if we don't close or end our stream
});

writeStream.end("kumar"); // we can also pass data here, it will add at last, after end method we can't write 

//! After end method , finish and close event will be fired ! 

writeStream.on("open", (fileDescriptor) => {
  console.log("fd :", fileDescriptor);
});

writeStream.on("finish", () => {
  console.log("finished"); // here it will wrok because we've already end
});
