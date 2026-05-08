import crypto from "crypto";


// Hashing 
const hash = crypto.createHash("sha256").update("Hello World").digest("hex");
console.log("Hash:", hash);