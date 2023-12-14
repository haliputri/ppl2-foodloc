import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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
    required: false,
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
  role: { type: String, default: 'user' }
}, 
{
  timestamps: true,
}
);

userSchema.pre('save', async function(next) {
  const user = this;

  // Hash the password only if it has been modified or is new
  if (!user.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with the salt
    const hash = await bcrypt.hash(user.password, salt);

    // Replace the plain text password with the hashed password
    user.password = hash;

    next();
  } catch (error) {
    return next(error);
  }
});

// Membuat model UserModel dari skema
export const userModel = mongoose.model('User', userSchema);