import { createClient } from "redis"
import dotenv from "dotenv"

dotenv.config()

console.log(process.env.REDIS_PASS)

const redisClient = await createClient({username : 'default', password : process.env.REDIS_PASS}).connect();

const ping = await redisClient.ping();

console.log(ping)