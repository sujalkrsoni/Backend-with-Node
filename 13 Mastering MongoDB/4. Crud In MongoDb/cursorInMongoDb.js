import { MongoClient} from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");    

await client.connect();

const db = client.db("moviesDB");

const cursor = db.collection("movies").find();

// console.log(cursor)  // this will return a cursor object which is an iterable object that allows us to iterate through the documents in the collection   



let count = 0 ; 
while(await cursor.hasNext()) {
    const doc = await cursor.next();
    console.log(doc);
    count++;
    if(count === 2) {
        break;
    }
}























//* Why is it Called a "Cursor"?
//* The word cursor means "a moving indicator" (like a blinking text cursor in a text editor). In databases, it works similarly—it moves through query results one by one, instead of retrieving all data at once.


//? Notes of cursor in MongoDB
// What is a Cursor?
//     -> A Cursor is a JS object returned by .find().
//     -> It stores query metadata and doesn't hit DB until a method like .toArray() or .next() is called.

// Cursor as an Async Iterator
//     -> const cursor = collection.find(); // returns a cursor
//     -> cursor[Symbol.asyncIterator];     // true ⇒ it's iterable

//     -> You can use:
//         for await (const doc of cursor) {
//         console.log(doc);
//         }

// Cursor Methods(few)

//     -> await cursor.next();     // Returns next document or null
//     -> await cursor.hasNext();  // Returns true/false


