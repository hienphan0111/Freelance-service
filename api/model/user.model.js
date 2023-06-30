import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  isSeller: {
    type: Boolean,
    required: false,
  }
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
