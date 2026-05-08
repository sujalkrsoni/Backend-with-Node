import fs from "fs"

// fd is predfined for 0,1,2 , O for stdin, 1 for stdout, 2 for stderr

fs.open("sujal.txt", (err, fd) => {
    console.log(fd) // 3
})
fs.open("sujal.txt", (err, fd) => {
    console.log(fd) //4
})
fs.open("sujal.txt", (err, fd) => {
    console.log(fd) //5
})


// other method 

let fd1 = fs.openSync("sujal.txt")
console.log(fd1) // 6