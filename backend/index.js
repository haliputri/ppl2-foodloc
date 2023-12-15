import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
// import { Restaurant } from "./models/restaurantModel.js";
import userRoute from "./routes/userRoute.js";
import restaurantsRoute from "./routes/restaurantsRoute.js";
import cors from "cors";
import reviewRouter from "./routes/reviewRoute.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Welcome`)
});

app.use(cors());
// Middleware for Parsing Resquest Body
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is listening to port : ${PORT}`);
});

app.use('/restaurants', restaurantsRoute);
app.use('/users', userRoute);
app.use('/reviews', reviewRouter)

mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('App Connected');
    })
    .catch((error)=>{
        console.log(error);
    })
