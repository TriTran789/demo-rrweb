"use server";

import mongoose from "mongoose";

// singleton connection
let isConnected = false;
export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }
  try {
    await mongoose.connect(
      "mongodb+srv://thanhtritran8:thanhtritran8@cluster0.hdeaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "demo_rrweb",
      }
    );
    isConnected = true;
    console.log("Using new database connection");
  } catch (error) {
    console.log("Error while connecting to database");
  }
};
