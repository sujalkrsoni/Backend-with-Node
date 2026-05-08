import fs from "fs";

const writeStream = fs.createWriteStream("output.txt");

console.time();
for (let i = 1; i <= 5000; i++) {
  // using append file (718ms)
  fs.appendFileSync("output.txt", `${i.toString()} \n`);
  if (i === 5000) {
    console.timeEnd();
  }
  // using write stream (24ms)
  //   writeStream.write(`${i.toString()} \n`);
}
// writeStream.end();
// writeStream.on("finish", () => {
//   console.timeEnd();
// });
