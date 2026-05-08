import fs from "fs"

const writeStream = fs.createWriteStream("char.txt")

console.log(writeStream.writableHighWaterMark) // 16kb or 16384bytes 

// write method is like append
writeStream.write("sujal") // from here you can write data in file 
writeStream.write("sujal")
writeStream.write("sujal")
writeStream.write("sujal")


