import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  gigId: {
    type: String,
    required,
  },
  userId: {
    type: String,
    required,
  },
  star: {
    type: Number,
    required,
    enum: [1,2,3,4,5]
  },
  desc: {
    type: String,
    required,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Review', ReviewSchema);
