import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

//serve images for public
app.use(express.static('public'));
app.use('/images', express.static("images"));

const user = process.env.NAME_MONGO_USER;
const pass = process.env.PASS_MONGO_USER;
const port = process.env.PORT_MONGO_SERVER;

//server
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//connect to Mong db
const query = "mongodb+srv://" + user + ":" + pass + "@cluster0.hi4nuw5.mongodb.net/SocialMedia?retryWrites=true&w=majority";
mongoose.connect(
    query, { useNewUrlParser: true, useUnifiedTopology: true }
).then(
    () => app.listen(port, () => console.log("listening Mongo db"))
).catch((error) => {
    console.log(error);
});

//routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/upload', UploadRoute);
