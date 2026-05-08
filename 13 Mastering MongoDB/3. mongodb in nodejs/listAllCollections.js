import { MongoClient } from "mongodb";  

const client = new MongoClient("mongodb://localhost:27017");

await client.connect();
const db = client.db()


// list all databases in the MongoDB server
const allDbs = await client.db().admin().listDatabases();
console.log(allDbs)


// create a new database and collection and insert a document
const newDb =  client.db("moviesDB");

// creating new collections!
const moviesCollection = newDb.collection("movies");

const newMovie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Science Fiction"
}

// adding a new document to the collection
// await moviesCollection.insertOne(newMovie);


//! list all collections in the database
// const collectionsList = await newDb.listCollections().toArray();
// console.log(collectionsList)
// await client.close(); 



//! find all documents in the collection
// const collection = newDb.collection("movies");
// const allDocuments = await collection.find().toArray();
// console.log(allDocuments);
// await client.close();
