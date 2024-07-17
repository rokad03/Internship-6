const { MongoClient } = require('mongodb');

// Replace this with your MongoDB Atlas connection string
const uri = 'mongodb+srv://nishitrokad:1234@cluster0.25na0ep.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Access a specific database
    const database = client.db('mydatabase');

    // Access a specific collection
    const collection = database.collection('mycollection');

    // Now you can perform database operations using the "collection" object
    // For example, you can insert documents, update, find, etc.

    // Close the connection when done
    await client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();
