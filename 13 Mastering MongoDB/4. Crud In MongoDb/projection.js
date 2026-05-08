import { MongoClient} from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");    

await client.connect();

const db = client.db("moviesDB");

const cursor = db.collection("movies").find({}, { projection: { title: 1, director: 1, _id: 0 } }); // this will return only the title and director fields of the documents in the collection and exclude the _id field
console.log(await cursor.toArray())  // this will return an array of documents with only the title and director fields and exclude the _id field
