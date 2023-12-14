import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
    {
        resto_id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        social_media: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        min_price: {
            type: Number
        },
        max_price: {
            type: Number
        },
        category: {
            type: String,
            enum: ["restaurants", "cafes", "jajanan"]
        },
        review: {
            type: String
        },
        working_hours: {
            type: String
        },
        logo: {
            type: String, // Assuming you store the URL or path to the logo image
        },
        menu: {
            type: String, // Assuming you store the URL or path to the menu image
        },
    },
    {
        timestamps: true,
    }
);

export const Restaurant = mongoose.model('Rest', restaurantSchema);