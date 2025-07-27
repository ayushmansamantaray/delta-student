const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const init= require("./samplelistings.js");
const ObjectId = mongoose.Types.ObjectId;

// Connect to MongoDB
main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// Seed function
const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("All previous listings deleted");
    // console.log(sampleListings);
    init.data=init.data.map((obj)=>({...obj,owner:new ObjectId("687089adc00f329002424a33")}));
    await Listing.insertMany(init.data);
    console.log("Sample listings inserted successfully!");
  } catch (err) {
    console.log("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
};

initDB();
