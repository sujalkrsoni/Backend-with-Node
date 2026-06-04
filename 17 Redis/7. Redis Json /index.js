import { createClient } from "redis"

const redisClient = await createClient().connect();

const data = await redisClient.get("name")
console.log(data)


//? get a json object 
const obj = await redisClient.json.get("userObj")

//? get a propterty of a object 
const name = await redisClient.json.get("userObj", {
    path : "$.name"
})
console.log(obj)  // { name: 'hello world', age: '22', email: 'sujalkrsoni@gmail.com' } 
console.log(name) // [ 'hello world' ]

//! update the age (update a the age )
const updateAge = await redisClient.json.set("userObj", "$.age", 22)

const incAge = await redisClient.json.numIncrBy("userObj", "$.age", 1)

console.log(incAge) // 23


const appendName = await redisClient.json.ARRAPPEND("userObj", "$.name" , '"bye !"')
console.log(appendName) // 2
console.log(obj)  


const subjects = await redisClient.json.get("userObj", {
    path : "$.subjects"
})
console.log("subjects", subjects) // [ 'math', 'english' ]


const pushSubject = await redisClient.json.ARRAPPEND("userObj", "$.subjects", "hindi")
console.log(pushSubject)


const getAllArrElement = await redisClient.json.get("userObj", {
    path : "$.subjects[*]"
})
console.log("getAllArrElement", getAllArrElement) // [ 'math', 'english', 'hindi' ]
console.log(obj)


const quitResult = await redisClient.quit();
console.log(quitResult)