import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/moviesDB");
await client.connect();

const db = client.db("moviesDB");
const movies = db.collection("movies");
const reviews = db.collection("reviews");

const session = client.startSession();
session.startTransaction();


//? make sure before using transactions, you've enabled the replica set in your MongoDB instance, as transactions require a replica set to function properly. You can enable a single-node replica set for development purposes by running the following command in your MongoDB shell:
//? rs.initiate()
//? rs.status() // to check the status of the replica set 
//* and you've to eable this in your mongod.conf file
//* replication:
//*   replSetName: myReplicaSet 
//* after enabling the replica set, mongo:27017/replicaSet=myReplicaSet should be used in the connection string instead of mongo:27017

try {
  await movies.insertOne({ title: "The Matrix", year: 1999 }, {session : session});
  await reviews.insertOne({
    movieTitle: "The Matrix",
    review: "Amazing movie!",
  }, {session : session});
} catch (error) {
  await session.abortTransaction();
  console.error("Transaction aborted due to an error:", error);
  return;
}

await session.commitTransaction();
session.endSession();

console.log("Transaction committed successfully!");

await client.close();
console.log("MongoDB connection closed.");
