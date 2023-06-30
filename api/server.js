import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongodb")
  } catch (err) {
    console.log(err);
  }
} 

app.listen(PORT, () => {
  connect();
  console.log('server is running on port: ', PORT);
});
