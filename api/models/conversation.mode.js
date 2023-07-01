import mongoose from 'mongoose';

const { Schema } = mongoose;

const ConversationSchema = new Schema({
  id: {
    type: String,
    required: true,
    uniquie: true,
  },
  sellerId: {
    type: String,
    required: true,
    uniquie: true,
  },
  buyerId: {
    type: String,
    required: true,
    uniquie: true,
  },
  readBySeller: {
    type: Boolean,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    required: true,
  },
  lastMessage: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Conversation', ConversationSchema);
