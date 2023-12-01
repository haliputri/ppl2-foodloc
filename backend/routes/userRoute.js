import express, { Router } from "express";
import { userModel } from "../models/userModel.js";
<<<<<<< HEAD

const router = express.Router();

router.post('/', async(request, response) => {
    try {
        if (
            // !request.body.user_id||
            !request.body.username || 
=======
import mongoose from 'mongoose';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            // !request.body.user_id||
            !request.body.username ||
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
<<<<<<< HEAD
                message : 'Send all required fields: username, email, password',
            });
        } 
=======
                message: 'Send all required fields: username, email, password',
            });
        }
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0

        const newUser = {
            // user_id: request.body.user_id,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
<<<<<<< HEAD
            name: request.body.name, 
=======
            name: request.body.name,
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
            address: request.body.address,
            gender: request.body.gender,
            birthdate: request.body.birthdate,
            profileImage: request.body.profileImage,
        };

        const user = await userModel.create(newUser);
        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
<<<<<<< HEAD
        response.status(500).send({ message: error.message});
    }
});

router.post('/login', (request, response) => {
    const {email, password} = request.body;
    userModel.findOne({email: email})
    .then( user => {
        if(user) {
            if(user.password == password){
                response.json({message : "Success", data:user, id:user._id})
            } else {
                response.json("The password is incorrect")
            }
        } else {
            response.json("No record existed")
        }
    })
})

router.get('/login/:id', async(request, response) => {
    try {
        const { id } = request.params;
=======
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

router.post('/login/find', (request, response) => {
    const { email, password } = request.body;

    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password == password) {


                    response.json({ message: "Success", data: user, id: user._id.toString() })
                } else {
                    response.json("The password is incorrect")
                }
            } else {
                response.json("No record existed")
            }
        })
})


const ObjectId = mongoose.Types.ObjectId;
router.get('/login/:id', async (request, response) => {
    try {
        const { id } = request.params;

        if (!ObjectId.isValid(id)) {
            return response.status(400).json({ message: 'Invalid ObjectId format' });
        }

>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
        const user = await userModel.findById(id);

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
<<<<<<< HEAD

        return response.status(200).json({
            data: user
=======
        // Convert ObjectId to string
        const userWithIdAsString = {
            ...user.toObject(),
            _id: user._id.toString(),
        };

        return response.status(200).json({
            data: userWithIdAsString,
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
<<<<<<< HEAD
})
// Route for Get All User from database
router.get('/', async(request, response) => {
    try{
        const users = await userModel.find({});
        
=======
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

>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
        return response.status(200).json({
            count: users.length,
            data: users
        });
<<<<<<< HEAD
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
=======
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
    }
});

// Route for Get All User from database by id
<<<<<<< HEAD
router.get('/:id', async(request, response) => {
    try{
        const {id} = request.params;
        
        const users = await userModel.findById(id);
        
=======
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const users = await userModel.findById(id);

>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
        return response.status(200).json({
            count: users.length,
            data: users
        });
<<<<<<< HEAD
    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
=======
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
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

<<<<<<< HEAD
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
=======
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
router.delete('/:id', async (request, response) => {
    try {
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
        const { id } = request.params;

        const result = await userModel.findByIdAndDelete(id);

<<<<<<< HEAD
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
=======
        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).send({ message: 'User deteleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
>>>>>>> c133ba8e920b17dad474e460353e69f8e6a9e3c0
