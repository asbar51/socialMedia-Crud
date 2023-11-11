import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import postRouter from "./routes/posts.js"

const app = express()

app.use('/posts', postRouter)

app.use(bodyParser.json({limit:"30mb",extended:"true" }))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true" }))
app.use(cors())

// mongo connect
const connection_url = 'mongodb+srv://devconnecter:dev123@cluster0.frqw9nk.mongodb.net/?retryWrites=true&w=majority';

const port = process.env.PORT || 5000

mongoose.connect(connection_url)
    .then(() => app.listen(port, ()=>console.log('we are listening on port : ', port)))
    .catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false);