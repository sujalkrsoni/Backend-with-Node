import fs from "fs/promises";

const fileHandle = await fs.open("text.txt", "r+"); // to write add w+ or r+

let option = {
  buffer: Buffer.alloc(10), // optional
  position: 4,
  length: 6,
  offset: 2,
};

const data = await fileHandle.read(option); // option is optional 

console.log(data);
console.log(data.buffer.toString()); 
console.log(fileHandle.fd); // file descriptor


const { buffer : writtenData, byesLength } = await  fileHandle.write("to kaise ho applog!")

console.log(writtenData, byesLength)

// to close 
fileHandle.close(); // return undefined 