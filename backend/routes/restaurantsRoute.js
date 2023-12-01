import express, { Router } from "express";
import { Restaurant } from "../models/restaurantModel.js";

const router = express.Router();
// Route for save a new Restaurant
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.resto_id ||
            !request.body.name || 
            !request.body.address ||
            !request.body.city ||
            !request.body.phone_number ||
            !request.body.social_media ||
            !request.body.rating
        ) {
            return response.status(400).send({
                message : 'Send all required fields: resto_id, name, address, city, phone_number, social media, rating',
            });
        } 

        const newResto = {
            resto_id:request.body.resto_id,
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
router.get('/:resto_id', async(request, response) => {
    try{
        const { resto_id } = request.params;
        
        const restaurants = await Restaurant.findOne({ resto_id });
        
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
// router.put('/:id', async(request, response) => {
//     try{
//         if (
//             !request.body.resto_id ||
//             !request.body.name || 
//             !request.body.address ||
//             !request.body.city ||
//             !request.body.phone_number ||
//             !request.body.social_media ||
//             !request.body.rating
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: resto_id, name, address, city, phone_number, social media, rating',
//             });

//             const {id} = request.params;

//             const result = await Restaurant.findByIdAndUpdate(id, request.body);

//             if(!result){
//                 return response.status(404).json({message: 'Restaurant not found'});
//             }

//             return response.status(200).send({ message: 'Restaurant updated successfully'})
//         }
//     } catch (error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message})
//     }
// });


router.put('/:resto_id', async(request, response) => {
    const { resto_id } = request.params;
  
    try {
      // Find the restaurant by ID
      const restaurant = await Restaurant.findOne({ resto_id });
  
      // If the restaurant is not found, return a 404 response
      if (!restaurant) {
        return response.status(404).json({ message: 'Restaurant not found' });
      }
  
      // Update the restaurant properties based on the request body
      // You can customize this based on your specific requirements
      restaurant.name = request.body.name || restaurant.name;
      restaurant.address = request.body.address || restaurant.address;
      restaurant.city = request.body.city || restaurant.city;
      restaurant.phone_number = request.body.phone_number || restaurant.phone_number;
      restaurant.social_media = request.body.social_media || restaurant.social_media;
      restaurant.rating = request.body.rating || restaurant.rating;
  
      // Save the updated restaurant to the database
      const updatedRestaurant = await restaurant.save();
  
      // Return the updated restaurant as the response
      response.status(200).json(updatedRestaurant);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Route for Delete Restaurants
router.delete( '/:resto_id', async(request, response) => {
    try{
        const { resto_id } = request.params;

        const result = await Restaurant.findOneAndDelete({ resto_id });

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