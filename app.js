const { MongoClient } = require('mongodb')
const assert = require('assert')

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";





// Connection URI
// Create a new MongoClient
const client = new MongoClient(uri);

const database = client.db('fruitsDB')
const fruits = database.collection("fruits")

async function connectDatabase() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db(database).command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function insertDocuments() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    
    const docs = [
      {
        name  : "apple",
        score: 8,
        review:"great fruit"
      },
      {
        name  : "orange",
        score: 6,
        review:"kinda sour"
      },
      {
        name  : "banana",
        score: 9,
        review:"great stuff"
      }
    ]

    const options = { ordered: true }
    
    const result = await fruits.insertMany(docs, options)
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function findAllDocuments() {
  try {
    const cursor = fruits.find({})
    const allValues = await cursor.toArray()
    console.log(allValues);
  } finally {
    await client.close();
  }
}

findAllDocuments().catch(console.dir);
