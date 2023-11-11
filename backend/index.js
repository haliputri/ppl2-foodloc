import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Restaurant } from "./models/restaurantModel.js";
import restaurantsRoute from "./routes/restaurantsRoute.js";
import cors from "cors";

const app = express();

const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
]

app.use(cors());
// Middleware for Parsing Resquest Body
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is listening to port : ${PORT}`);
});

app.use('/restaurants', restaurantsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App Connected');
    })
    .catch((error) => {
        console.log(error);
    })