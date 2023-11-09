import mongoose from "mongoose";

// Skema (Schema) untuk model UserModel
const userSchema = new mongoose.Schema({
//   user_id: {
//     type: String, // Tipe data untuk user_id (sesuaikan dengan kebutuhan Anda)
//     required: true,
//     unique: true,
//   },
  username: {
    type: String,
    required: true,
    unique: true,
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
}, 
{
  timestamps: true,
}
);

// Membuat model UserModel dari skema
export const userModel = mongoose.model('User', userSchema);