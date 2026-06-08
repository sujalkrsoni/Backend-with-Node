import { createClient } from "redis"

const redisClient = await createClient().connect()

const setData = await redisClient.hSet("myHash", "name", "sujal kumar soni")

const getData = await redisClient.hGet("myHash", "name")


console.log(setData, getData)
