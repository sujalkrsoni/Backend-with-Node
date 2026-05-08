import fs from "fs";

let fd = fs.openSync("sujal.txt", "w");

fs.write(fd, "data what we've to write", (err, bytesWritten, data) => {
  console.log(bytesWritten); // 24
  console.log(data); // data what we've to write
});

// we can also write buffer

let buff = Buffer.from("hello bro!");

fs.write(fd, buff, (err, bytesWritten, data) => {
  console.log(bytesWritten); // 10
  console.log(data); // <Buffer 68 65 6c 6c 6f 20 62 72 6f 21>
  console.log(data.toString()); // hello bro!
});


// other chars send like emoji or hindi chars then length be not 1 byte for each char , due to unicode 
fs.write(fd, "❤️", (err, bytesWritten, data) => {
  console.log(bytesWritten); // 6
  console.log(data); // ❤️
});

fs.write(fd, "त्र", (err, bytesWritten, data) => {
  console.log(bytesWritten); // 9 (because devnagri takes 3byes for each char, tra त् + र  )
  console.log(data); // त्र
});