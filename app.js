const mongoose = require("mongoose")

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017/fruitsDB";

mongoose.connect(uri)
console.log("mongoDB connected");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
  name: "apple",
  rating: 7,
  review:"pretty solid as a fruit"
}) 

const peopleSchema = new mongoose.Schema({
  name: String,
  age:Number
})

const People = mongoose.model("People", peopleSchema)

const people = new People({
  name: "john",
  age:37
})

// people.save()

// fruit.save()

const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review:"the best fruit!"
})

const orange = new Fruit({
  name: "orange",
  rating: 4,
  review:"ttoo sour for me"
})

const banana = new Fruit({
  name: "banana",
  rating: 3,
  review:"weird texture"
})

Fruit.insertMany([kiwi, orange, banana], {ordered:true})




async function findAllDocuments() {
  try {
    const cursor = fruits.find({})
    const allValues = await cursor.toArray()
    console.log(allValues);
  } finally {
    await client.close();
  }
}

// findAllDocuments().catch(console.dir);
