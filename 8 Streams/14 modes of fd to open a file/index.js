import fs from "fs";
// in first arg give the file name, in second give flag
// const fd = fs.openSync("sujal.txt", "r"); // r means read (by default)
// const fd = fs.openSync("sujal.txt", "w");  // write, we've to set
const fd = fs.openSync("sujal.txt", "a");  // append

fs.writeSync(fd, "hii");

// other flag 
// w+ (read and write ) if file doesn't exists then it will create new file
// r+ (read and write) but if file doesn't exists then it will not create 
// a+ (read and write ) 
// w if we set w then we can only write not read, if we do , then file will be empty

