import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Restaurant } from "./models/restaurantModel.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welocome')
});

// Middleware for Parsing Resquest Body
app.use(express.json());

// Route for save a new Restaurant
app.post('/restaurants', async(request, response) => {
    try {
        if (
            !request.body.name || 
            !request.body.address ||
            !request.body.city ||
            !request.body.phone_number ||
            !request.body.social_media ||
            !request.body.rating
        ) {
            return response.status(400).send({
                message : 'Send all required fields: name, address, city, phone_number, social media, rating',
            });
        } 

        const newResto = {
            name: request.body.name,
            address: request.body.address,
            city: request.body.city,
            phone_number: request.body.phone_number,
            social_media: request.body.social_media,
            rating: request.body.rating,
        };

        const restaurant = await Restaurant.create(newResto);
        return response.status(201).send(restaurant);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

app.listen(PORT, () => {
    console.log(`App is listening to port : ${PORT}`);
})

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App Connected');
    })
    .catch((error)=>{
        console.log(error);
    })