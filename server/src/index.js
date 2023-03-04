const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");




const userRouter = require("./routes/userRoutes");


app.use(express.json());
app.use(cors());


app.use("/users", userRouter);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port no. " + PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
