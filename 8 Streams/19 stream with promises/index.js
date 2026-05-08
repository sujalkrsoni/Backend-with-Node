import fs from "fs/promises"

// if we want to create stream then first we've to open a file 
// const fileHandle = await fs.open("sujal.txt")

// const readStream = fileHandle.createReadStream()

// // readStream.setEncoding("utf-8")

// readStream.on("data", (chunk) => {
//     // fileHandle.write(chunk)
//     console.log(chunk)
//     console.log(chunk.toString())
// })


//? -------------------------------------------------------------------------------------


const openReadFile = await fs.open("C:\\Users\\sujal\\OneDrive\\Desktop\\movie.mkv") 

const openWriteFile = await fs.open("output.mkv", "w");

const readStream = openReadFile.createReadStream()
const writeStream = openWriteFile.createWriteStream()

readStream.pipe(writeStream)


                          








