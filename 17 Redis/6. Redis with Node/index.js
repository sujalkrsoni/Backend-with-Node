import { createClient } from "redis";

const redisClient = await createClient().connect();

// const name = await redisClient.set("name", "sujal kumar soni")
// console.log(name);

// const age = await redisClient.set("age", "22")
// console.log(age);

// const email = await redisClient.set("email", "sujalsoni@gmail.com")
// console.log(email);

// const getData = await redisClient.get("name");
// console.log(getData)

// const disconnect = await redisClient.disconnect();   // for the forecefully shutdown
// console.log(disconnect)

// const quit = await redisClient.quit(); // graceful shutdown
// console.log(quit)

const obj = {
  name: "sujal",
  age: 22,
  email: "sujalsoni@gmail.com",
};

// const data = await redisClient.set("user", JSON.stringify(obj));
// console.log(data);

// const getData = await redisClient.get("user");
// console.log(JSON.parse(getData));
// console.log(getData);

// const buffer = Buffer.from("7b226e616d65223a2273756a616c222c22616765223a32322c22656d61696c223a2273756a616c736f6e6940676d61696c2e636f6d227d", "hex")
// console.log(buffer.toString("utf-8"));


//? selecting any custom db 
// redisClinet.select(1); // selectiong first database 




//? my custom method to set the stringify data into redis 

redisClient.setJSON = async (key , value) => {
//  const result = await redisClient.set(key, JSON.stringify(value))
  const result = await this.set(key, JSON.stringify(value)) // here this point redisClient object 
 return result;
}

redisClient.getJSON = async (key) => {
    const result = await this.get(key)
    return JSON.parse(result);
}


const setUser2 = await redisClient.setJSON("user2", obj);
const getUser2 = await redisClient.getJSON("user2")
console.log(setUser2, getUser2);