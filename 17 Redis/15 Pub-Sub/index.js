import { createClient } from "redis"

const redisClient = await createClient().connect();

await redisClient.subscribe("myChannel", (message)=> {
    console.log(message)
})


await redisClient.PUBLISH("myChannel", "Hello world from nodejs!")

// await redisClient.unsubscribe("myChannel") // to unsubscribe from the channel