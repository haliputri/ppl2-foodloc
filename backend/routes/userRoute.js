import express, { Router } from "express";
import { userModel } from "../models/userModel.js";

const router = express.Router();

router.post('/', async(request, response) => {
    try {
        if (
            // !request.body.user_id||
            !request.body.username || 
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message : 'Send all required fields: username, email, password',
            });
        } 

        const newUser = {
            // user_id: request.body.user_id,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
            name: request.body.name, 
            address: request.body.address,
            gender: request.body.gender,
            birthdate: request.body.birthdate,
            profileImage: request.body.profileImage,
        };

        const user = await userModel.create(newUser);
        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});


// Route for Get All User from database
router.get('/', async(request, response) => {
    try{
        const users = await userModel.find({});
        
        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Get All User from database by id
router.get('/:id', async(request, response) => {
    try{
        const {id} = request.params;
        
        const users = await userModel.findById(id);
        
        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Update a User
// router.put('/:id', async(request, response) => {
//     try{
//         if (
//             !request.body.username || 
//             !request.body.email ||
//             !request.body.password
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: username, email, password'
//             });

//             const {id} = request.params;

//             const result = await userModel.findByIdAndUpdate(id, request.body);

//             if(!result){
//                 return response.status(404).json({message: 'User not found'});
//             }

//             return response.status(200).send({ message: 'User updated successfully'})
//         }
//     } catch (error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message})
//     }
// });

router.put('/:id', async(request, response) => {     
    const { id } = request.params;
  
    try {
      // Find the restaurant by ID
      const result = await userModel.findByIdAndUpdate(id, request.body);

            if(!result){
                return response.status(404).json({message: 'User not found'});
            }

  
            result.username =  request.body.username || result.name;
            result.email =  request.body.email || result.email;
            result.password = request.body.password || result.password;
            result.name =  request.body.name || result.name;
            result.address =  request.body.address || result.address;
            result.gender = request.body.gender || result.gender;
            result.birthdate =  request.body.birthdate || result.birthdate;
            result.profileImage = request.body.profileImage || result.profileImage;

      // Update the restaurant properties based on the request body
      // You can customize this based on your specific requirements
      // Save the updated restaurant to the database
        const updatedUser = await result.save();
  
      // Return the updated restaurant as the response
      response.status(200).json(updatedUser);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Route for Delete User
router.delete( '/:id', async(request, response) => {
    try{
        const { id } = request.params;

        const result = await userModel.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'User not found'});
        }

        return response.status(200).send({message: 'User deteleted successfully'});
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;
