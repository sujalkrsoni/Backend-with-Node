import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on("message", (data, deviceInfo) => {
  // Convert buffer -> string
  console.log(data.toString());
  console.log(deviceInfo);

  // Prepare response
  const response = {
    message: "Message received successfully!",
    data: data.toString()
  };

  // Send JSON as buffer
  socket.send(
    Buffer.from(JSON.stringify(response)), 
    deviceInfo.port, 
    deviceInfo.address
  );
});


// we can directly this listeing into bind method
socket.on("listening", () => {
  console.log("listening !");
  console.log(socket.address());
});

//! default port (auto assign )
// socket.bind()

// bind method run after listening, with our defined port, bind is used to create server
socket.bind({ port: 4000 }, () => {
  console.log("listening !");
  console.log(socket.address());
});

// socket.send("Hii from laptop", 3000, "10.79.170.53")




