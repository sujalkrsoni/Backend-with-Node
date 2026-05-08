import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

await client.connect();


//! list all databases in the MongoDB server
// const allDbs = await client.db().admin().listDatabases();
// console.log(allDbs);


const db = await client.db("moviesDB");

//! list all collections in the database
const collectionsList = await db.listCollections().toArray();
// console.log(collectionsList)


//* find all documents in the collection (--------------- READ OPERATION -----------------)
const allMovies = await db.collection("movies").find().toArray();
console.log(allMovies)


//* find one document in the collection (---------------- READ OPERATION -----------------)
const oneMovie = await db.collection("movies").findOne({ title: "Inception" });
// console.log(oneMovie)

//* find documents by id (---------------- READ OPERATION -----------------)
const movieById = await db.collection("movies").findOne({ _id: new ObjectId("69b628c70dc9d1c4d879bf7a") });  // make sure first import objectId from mongodb and then use it to find document by id
// console.log(movieById)


// * update a document in the collection (---------------- UPDATE OPERATION -----------------)
// const updateResult = await db.collection("movies").updateOne({ title: "Inception" }, { $set: { releaseYear: 2012 } });
// console.log(updateResult)


// * update a document by id in the collection (---------------- UPDATE OPERATION -----------------)
// const updateByIdResult = await db.collection("moviies").updateOne({ _id: new ObjectId("69b628c70dc9d1c4d879bf7a") }, { $set: { releaseYear: 2012 } });
// console.log(updateByIdResult)


//* delete a document from the collection (---------------- DELETE OPERATION -----------------)
// const deleteResult = await db.collection("movies").deleteOne({ title: "Inception" });
// console.log(deleteResult)


