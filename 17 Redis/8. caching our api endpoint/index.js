import express from "express";
import { createClient } from "redis";

const redisClient = await createClient().connect();

const app = express();

app.get("/users/:id", async (req, res) => {
  const cachedData = await redisClient.json.get(req.params.id);
  console.log("cachedData", cachedData);
  if (!cachedData) {
    console.log("No Cached Data Found!");
    const userData = await getUser(req.params.id);
    //? without expire time 
    // const setUser = await redisClient.json.set(req.params.id, "$", userData);
    // redisClient.expire(req.params.id, 60 * 5) // in diff line of command 

    // to set the expire time of the data (in single command)
    const setUser = await redisClient
      .multi()
      .json.set(req.params.id, "$", userData)
      .expire(req.params.id, 60 * 5)
      .exec();
    console.log("Cached Data Sucessfully!", setUser);
    return res.json(userData);
  }
  console.log("send cached Data");
  return res.json(cachedData);
});

app.put("/users/:id", async ( req, res) => {
   const { data } = req.body;
   await updateUser(req.params.id, data); // updating the user into the db
  //  await redisClient.del(req.params.id); // deleting the user from the cache , or simply you can update the cache too !
   const setUser = await redisClient.json.set(req.params.id, "$", data); // updating the user into the cache 
   return res.json(data)
})

app.listen(4000, () => {
  console.log("Server started on 4000");
});

async function getUser(userId) {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  return await response.json();
}
