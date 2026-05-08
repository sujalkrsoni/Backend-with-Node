import { createReadStream } from "node:fs";
import crypto from "crypto";

const stream = createReadStream("./hello.tsx");

stream.on("data", (chunk) => {
    console.log("Chunk in string :" , chunk.toString(), "chunk :",chunk);

    const hash = crypto.createHash("sha256").update(chunk).digest("hex");
    const hash2 = crypto.createHash("sha256").update(chunk.toString()).digest("hex");
    const hash3 = crypto.createHash("sha256").update(Buffer.from(chunk, "base64")).digest("hex");

    const hash4 = crypto.createHash("sha256").update(chunk).digest("base64url");


    console.log("Hash of chunk:", hash);
    console.log("Hash of chunk.toString():", hash2);
    console.log("Hash of Buffer.from(chunk, 'base64'):", hash3);
    console.log("Hash of chunk (base64url):", hash4);
})

// github uses hash for their commits like this : 43d4f8 , here this should be last digit for our file hash !

