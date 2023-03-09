const mongoose = require("mongoose")

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017/fruitsDB";

mongoose.connect(uri)
console.log("mongoDB connected");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"please check your data entry, no name specified!"]
  },
  rating: Number,
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
  name: "apple",
  rating: {
    type: Number,
    min: 1,
    max:10
  },
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

const melon = new Fruit({
  rating: 5,
  review:"the best fruit!"
})


async function finder() {
  const query = await Fruit.find({})
  query.forEach((element) => {
    console.log(element.name);
  })
  console.log("monogDB close");
  mongoose.connection.close()
}

async function update() {
  const res = await Fruit.updateOne
    ({ _id: "64095fb77f9b46d7b6186a64" }, { name: "melon" })
}

async function deleteOne() {
  await Fruit.deleteOne({rating:34})
}
// update()
// deleteOne()
finder()

