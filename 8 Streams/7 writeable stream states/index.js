import fs from "fs"

const writeStream = fs.createWriteStream("sujal.txt")

writeStream.write("sujal")
console.log(writeStream.writable) 

// writeStream.end();
console.log(writeStream.writable) 


writeStream.cork() // cork method doesn't allow to write in disk, it will only create buffer on Ram, if we want to write on disk then we've to use uncork method  
writeStream.write("sujal")
writeStream.write("sujal")
writeStream.write("sujal")

writeStream.uncork() // after this method all write data will be write on disk, upper content too 
writeStream.write(" after uncork - sujal") 

writeStream.end()
console.log(writeStream.writableEnded) 
console.log(writeStream.writableFinished) // false, because it doesn't finish instant it take time after end mehtod called 
console.log("data size after end :",writeStream.writableLength)

setTimeout(() =>{
    console.log(writeStream.writableFinished) // true 
    console.log("data size after finished : ",writeStream.writableLength)
},1000)