import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    otherName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
    type: String,
    enum: ['poster', 'doer', 'admin'],
    default: 'poster',
  },
  profile: {
    bio: String,
    location: {
      type: String,
      default: 'Not specified',
    },
    skills: [String],
    rating: {
      type: Number,
      default: 0,
    },
    completedTasks: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 0,
    },
    profileImage: String,
  },
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notification',
  }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//create a user model using the userschema
export const User = mongoose.model("User", userSchema);