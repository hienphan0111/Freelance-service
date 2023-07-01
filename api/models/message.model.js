import mongoose from 'mongoose';

const { Schema } = mongoose;

const Message = new Schema({
  ConversationId: {
    type: String,
    required: true,
    uniquie: true,
  },
  UserId: {
    type: String,
    required: true,
    uniquie: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Message', MessageSchema);
