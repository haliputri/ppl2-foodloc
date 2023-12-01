import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
    {
        resto_id:{
            type:String,
            required: true,
            unique: true,
        },
        name:{
            type:String,
            required: true,
        },
        address:{
            type:String,
            required: true,
        },
        city: {
            type:String,
            required: true,
        },
        phone_number: {
            type:String,
            required: true,
        },
        social_media: {
            type:String,
            required: true,
        },
        rating: {
            type:Number,
            required:true,
        }
    }, 
    {
        timestamps: true,
    }
);

export const Restaurant = mongoose.model('Rest',restaurantSchema);