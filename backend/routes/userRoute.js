import express, { Router } from "express";
import { userModel } from "../models/userModel.js";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            // !request.body.user_id||
            !request.body.username ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, email, password',
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
        response.status(500).send({ message: error.message });
    }
});

router.post('/regist', async (request, response) => {
    try {
        if (
            // !request.body.user_id||
            !request.body.username ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, email, password',
            });
        }

        const newUser = {
            // user_id: request.body.user_id,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
            name: request.body.username,
        };

        const user = await userModel.create(newUser);
        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// router.post('/login/find', (request, response) => {
//     const { email, password } = request.body;

//     userModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password == password) {


//                     response.json({ message: "Success", data: user, id: user._id.toString() })
//                 } else {
//                     response.json("The password is incorrect")
//                 }
//             } else {
//                 response.json("No record existed")
//             }
//         })
// })

router.post('/login/find', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email: email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        // Passwords match, user is authenticated
        // Proceed with login logic
        return res.status(200).json({ message: "Success", data: user, id: user._id.toString() });
      } else {
        // Passwords do not match, authentication failed
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


const ObjectId = mongoose.Types.ObjectId;
router.get('/login/:id', async (request, response) => {
    try {
        const { id } = request.params;

        if (!ObjectId.isValid(id)) {
            return response.status(400).json({ message: 'Invalid ObjectId format' });
        }

        const user = await userModel.findById(id);

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        // Convert ObjectId to string
        const userWithIdAsString = {
            ...user.toObject(),
            _id: user._id.toString(),
        };

        return response.status(200).json({
            data: userWithIdAsString,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/login/find/:username', async (req, res) => {
    try {
        const { username } = req.params;
    
        // Find user by username
        const user = await userModel.findOne({ username });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json({ data: user });
      } catch (error) {
        console.error('Error finding user by username:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

router.get('/login/find/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
      }
  
      // Find user by ID
      const user = await userModel.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ data: user });
    } catch (error) {
      console.error('Error finding user by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.put('/edit/:username', async (request, response) => {
    const { username } = request.params;
  
    try {
      // Find the user by username
      const user = await userModel.findOne({ username });
  
      if (!user) {
        return response.status(404).json({ message: 'User not found' });
      }
  
      // Update user properties based on the request body
      user.username = request.body.username || user.username;
      user.email = request.body.email || user.email;
      user.password = request.body.password || user.password;
      user.name = request.body.name || user.name;
      user.address = request.body.address || user.address;
      user.gender = request.body.gender || user.gender;
      user.birthdate = request.body.birthdate || user.birthdate;
  
      // Update profileImage if a file is uploaded
    //   if (request.file) {
    //     user.profileImage = request.file.buffer; // Assuming you want to store the file content in the database
    //   }
  
      // Save the updated user to the database
      const updatedUser = await user.save();
  
      // Return the updated user as the response
      response.status(200).json(updatedUser);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({ message: 'Internal Server Error' });
    }
  });

router.put('/edit/:id', async (request, response) => {
    const { id } = request.params;

    try {
      // Find the user by username
      const result = await userModel.findByIdAndUpdate(id, request.body);
  
      if (!user) {
        return response.status(404).json({ message: 'User not found' });
      }
  
      // Update user properties based on the request body
      user.username = request.body.username || user.username;
      user.email = request.body.email || user.email;
      user.password = request.body.password || user.password;
      user.name = request.body.name || user.name;
      user.address = request.body.address || user.address;
      user.gender = request.body.gender || user.gender;
      user.birthdate = request.body.birthdate || user.birthdate;
      user.profileImage = request.body.profileImage || user.profileImage;
  
      // Save the updated user to the database
      const updatedUser = await user.save();
  
      // Return the updated user as the response
      response.status(200).json(updatedUser);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({ message: 'Internal Server Error' });
    }
});

// router.get('/login/:id', async(request, response) => {
//     try {
//         const { id } = request.params;
//         const user = await userModel.findById(id);

//         if (!user) {
//             return response.status(404).json({ message: 'User not found' });
//         }

//         // return response.status(200).json({
//         //     data: user
//         // });
//         // Convert ObjectId to string
//         const userWithIdAsString = {
//             ...user.toObject(),
//             _id: user._id.toString(),
//         };

//         return response.status(200).json({
//             data: userWithIdAsString,
//         });

//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// })

// Route for Get All User from database
router.get('/', async (request, response) => {
    try {
        const users = await userModel.find({});

        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All User from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const users = await userModel.findById(id);

        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
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

router.put('/:id', async (request, response) => {
    const { id } = request.params;

    try {
        // Find the restaurant by ID
        const result = await userModel.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }


        result.username = request.body.username || result.name;
        result.email = request.body.email || result.email;
        result.password = request.body.password || result.password;
        result.name = request.body.name || result.name;
        result.address = request.body.address || result.address;
        result.gender = request.body.gender || result.gender;
        result.birthdate = request.body.birthdate || result.birthdate;
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
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userModel.findByIdAndDelete(id);
    
        if (!result) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        return res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
      }
});

export default router;
