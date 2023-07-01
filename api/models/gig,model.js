import mongoose from 'mongoose';

const { Schema } = mongoose;

const GigSchema = new Schema({
  UserId: {
    type: String,
    required,
  },
  title: {
    type: String,
    required,
  },
  desc: {
    type: String,
    required,
  },
  totalStars: {
    type: Number,
    required,
  },
  starNumber: {
    type: Number,
    default: 0,
  },
  cat: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required,
  },
  cover: {
    type: String,
    required,
  },
  images: {
    type: [String],
    required: false,
  },
  shortTitle: {
    type: String,
    required,
  },
  shortDesc: {
    type: String,
    required,
  },
  deliveryTime: {
    type: Number,
    required,
  },
  revisionNumber: {
    type: Number,
    required,
  },
  features: {
    type: [String],
    required,
  },
  sales: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

export default mongoose.model('Gig', GigSchema);