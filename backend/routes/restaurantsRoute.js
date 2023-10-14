import express, { Router } from "express";
import { Restaurant } from "../models/restaurantModel.js";

const router = express.Router();
// Route for save a new Restaurant
router.post('/', async(request, response) => {
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
});


// Route for Get All Restaurants from database
router.get('/', async(request, response) => {
    try{
        const restaurants = await Restaurant.find({});
        
        return response.status(200).json({
            count: restaurants.length,
            data: restaurants
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Get All Restaurants from database by id
router.get('/:id', async(request, response) => {
    try{
        const {id} = request.params;
        
        const restaurants = await Restaurant.findById(id);
        
        return response.status(200).json({
            count: restaurants.length,
            data: restaurants
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Update a Restaurants
router.put('/:id', async(request, response) => {
    try{
        if (
            !request.body.name || 
            !request.body.address ||
            !request.body.city ||
            !request.body.phone_number ||
            !request.body.social_media ||
            !request.body.rating
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, address, city, phone_number, social media, rating',
            });

            const {id} = request.params;

            const result = await Restaurant.findByIdAndUpdate(id, request.body);

            if(!result){
                return response.status(404).json({message: 'Restaurant not found'});
            }

            return response.status(200).send({ message: 'Restaurant updated successfully'})
        }
    } catch (error){
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
});

// Route for Delete Restaurants
router.delete( '/:id', async(request, response) => {
    try{
        const { id } = request.params;

        const result = await Restaurant.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Restaurant not found'});
        }

        return response.status(200).send({message: 'Restaurants deteleted successfully'});
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;