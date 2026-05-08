import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

await client.connect();
const db = client.db("moviesDb");
const moviesCollection = db.collection("movies");

//? 1. ordered bulk write (used if you want to continue the bulk write even if one of the operations fails)

const bulkInsertResult = await moviesCollection.insertMany(
  [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 }
  ], {ordered : false}  // if false then continue the bulk write even if one of the operations fails, if true then stop the bulk write if one of the operations fails
);



//? 2 upsert (used to update a document if it exists or insert a new document if it doesn't exist)

const upsertResult = await moviesCollection.updateOne(
  { title: "The Shawshank Redemption" },
  { $set: { year: 1995 } },
  { upsert: true }
);


// ? 3 commands (there is a command method for each operation, for example there is a command method for insert, update, delete, etc.)
//* so that we can perform any operations using the command method, for example we can perform an insert operation using the command method like this:

const commandInsertResult = await db.command({insert : "movies", documents : [{ title: "Pathaan ", year: 2024 }]});

//* we can also perform an update operation using the command method like this:

const commandUPdateResult = await db.command({ update : "movies", updates : [{ q : { title: "Pathaan" }, u : { $set : { year : 2025 } } }] });


//* we can create a collection using these methos :

const createCollectionResult = await db.command({ create : "actors" });
const createCOllectionResult2 = await db.createCollection("directors");
const createCollectionResult3 = await db.users.insertOne({ name: "John Doe", age: 30 });

// & view a document using the command method like this :

const findResult = await db.command({find : {name : 1, age : 1, _id : 0}, filter : {name : "John Doe"}}); // this will return the document with name and age fields only and exclude the _id field and whose name is John Doe 





//? 4. validation (used to validate the data before inserting or updating it in the collection)

const validationResult = await db.command({
  collMod: "movies", // collmod : collection modification
  validator: {  // this is the validation rule, we can use any validation rule here, for example we can use $jsonSchema to validate the data against a JSON schema
    title: { $type: "string" },
    year: { $type: "number", minimum: 1900, maximum: 2024 }, 

    //! we can also use $jsonSchema to validate the data against a JSON schema, for example we can use the following JSON schema to validate the data against it:
    $jsonSchema : {
      bsonType : "object",
      required : ["title", "year"],
      properties : {
        title : {
          bsonType : "string",
          description : "must be a string and is required"
        },
        year : {
          bsonType : "number",
          minimum : 1900,
          maximum : 2024,
          description : "must be a number between 1900 and 2024 and is required"
        }
      }
    }, 


    validationAction: "error", // this is the validation action, we can use either "error" or "warn", if we use "error" then the operation will fail if the data doesn't pass the validation, if we use "warn" then the operation will succeed but a warning will be logged in the server logs
    validationLevel: "strict" // this is the validation level, we can use either "strict" or "moderate", if we use "strict" then the validation will be applied to all the documents in the collection, if we use "moderate" then the validation will be applied only to the new documents that are inserted or updated in the collection
  }
});




// ? 5. invalid documents (used to view the documents that failed the validation)

const collections = await db.listCollections({ name: "movies" }).toArray();

const schema = collections[0]?.options?.validator?.$jsonSchema;

const invalidDocs = await db.collection("movies").find({
  $nor: [
    {
      $jsonSchema: schema,
    }
  ]
}).toArray();

console.log(invalidDocs);


//! using mongosh 
// const schema = db.getCollectionInfos({ name: "movies" })[0]?.options?.validator?.$jsonSchema;

// const invalidDocs = db.movies.find({
//   $nor: [{ $jsonSchema: schema }]
// });