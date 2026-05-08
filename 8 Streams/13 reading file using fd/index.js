import fs from "fs"
import { endianness } from "os"
import { buffer } from "stream/consumers"


let fd = fs.openSync("sujal.txt")
// let fd = fs.openSync("package.json")
// let fd = fs.openSync("index.js") // print this file data in terminal 


let readBuffer = Buffer.alloc(10) // creating our own buffer with size of 10 bytes, it will not increase size according to data

// fd, buffer(which to store buffer, its optional , if we don't pass then it will create new buffer of 16kb)
// position is used to descibe from where to start !, it will start from second position. 
// length is used to stop reading, even we've space 
// offset is used to don't read at starting position
fs.read(fd,{ buffer : readBuffer, position : 2, length : 5, offset : 2}, (err, bytesRead, bufferData) => { // fd will be number 
    console.log(err, bytesRead, bufferData)
    console.log(bufferData.toString())
    console.log(bufferData.byteLength) // 16kb (16384)
})