import dgram from "node:dgram"

const socket = dgram.createSocket("udp4");

socket.send("hii from app.js", 4000, "192.168.0.100")



// acknwoledgement from otherside 

socket.on("message", (data, deviceInfo) => {
    try {
        const obj = JSON.parse(data.toString()); // convert buffer -> string -> object
        console.log(obj); // will print as object
        console.log(obj.message); // "Message received successfully!"
        console.log(obj.data);    // "hii from app.js"


        // if other side data is received then close the server 
        socket.close()
    } catch (err) {
        console.error("Invalid JSON received:", err);
    }
});


