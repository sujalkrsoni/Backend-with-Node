import fs from "fs";
import Stream from "stream";

const writeStream = fs.createWriteStream("sujal.txt", { highWaterMark: 1000 });

console.log(writeStream.writableLength);
writeStream.write("s")
console.log(writeStream.writableLength);
writeStream.write("u")
console.log(writeStream.writableLength);
writeStream.write("j")
console.log(writeStream.writableLength);
writeStream.write("a")
console.log(writeStream.writableLength);
writeStream.write("l")
console.log(writeStream.writableLength); // 5 

const isAvailableForMoreData = writeStream.write("soni") // if it return true, then available, if false then not available 
console.log(writeStream.writableLength);
console.log(isAvailableForMoreData)

if(isAvailableForMoreData){
    writeStream.write("sks") // if space available then write new data 
    console.log("data written !")
}



console.log("***********************************************************")

//? ----------------------- Drain use -------------------------- 
// if stream is empty then drain run 

let i = 0;
function write100A(){
    while(i < 1000){
        let isEmpty = writeStream.write("A")
        i++;
        if(!isEmpty){
            break;
        }
        // console.log(isEmpty)
    }
}

write100A();

writeStream.on("drain", () => {
    console.log("drain", writeStream.writableLength)
    write100A();
})



//? -------------------- time ----------------

//! with fs.appendfileSync("stream.mp4", data)
//  time : 4.5s
// memory : 45mb
// cpu :12%

//! with createwritestream 
//  time : 1.5s
// memory : 1GB
// cpu : 20%


//! createwritestream with backpressure 
//  time : 2s
// memory : 40mb
// cpu : 20%
