import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import reviewRoute from './routes/message.route.js';
import messageRoute from './routes/message.route.js';
import conversationRoute from './routes/conversation.route.js';
import orderRoute from './routes/order.route.js';
import gigRoute from './routes/gig.route.js';

const app = express();
dotenv.config();

const PORT = 5000;

app.use('/api/users', userRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/orders', orderRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/message', messageRoute);

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
