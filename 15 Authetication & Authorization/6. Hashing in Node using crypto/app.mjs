import crypto from "crypto";
import { readFileSync } from "fs";

// const fileData = readFileSync(
//   "C:\\Users\\anura\\yt-downloads\\videos\\02 stateful vs stateless auth.mp4"
// );



// const hash1 = crypto.createHash("sha256").update(fileData).update("Hello World").digest("base64url"); 

const hash = crypto
  .createHash("sha256")
  .update("Hello ")
  .update("World")
  .digest("base64url");
  // .digest("hex");

console.log(hash);

console.log(
  Buffer.from(
    "pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4",
    "base64url"
  ).toString("hex")
);

//? Hashing the same data with different algorithms will produce different hashes
const hash2 = crypto.createHash("sha256").update("Hello World").digest("hex");
console.log("hash2:", hash2);
console.log(Buffer.from(hash2, "hex").toString("base64url"));