const mongoose = require('mongoose');

// require('dotenv/config');

// mongoose.connect('mongodb://localhost/cgcdb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));



const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://max-content:3LhK0yrbkWRyh4uy@cluster0.biy6t.mongodb.net/cgcdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
