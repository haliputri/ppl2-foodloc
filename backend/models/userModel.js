import mongoose from "mongoose";

// Skema (Schema) untuk model UserModel
const userSchema = new mongoose.Schema({
  // user_id: {
  //   type: Number,
  //   unique: true,
  // },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  gender: {
    type: String, // Assuming gender can be a string (e.g., "male", "female")
    enum: ["Pria", "Wanita"], // Optional: Use enum to restrict values
  },
  birthdate: {
    type: Date, // Assuming birthdate is a date
  },
  profileImage: {
    type: String,
  },
}, 
{
  timestamps: true,
}
);

// Membuat model UserModel dari skema
export const userModel = mongoose.model('User', userSchema);