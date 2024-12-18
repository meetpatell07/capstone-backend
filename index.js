const express = require('express')
const mongoose = require('mongoose') // Mongoose for MongoDB Conenction
const dotenv = require('dotenv'); // dotenv to load environment variables
dotenv.config() // Load the variable from .env file

const SERVER_PORT = process.env.port || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json())

// Error Handling MiddleWare
app.use((err, req, res, next) => {
    console.log("An error occured: ", err); // Log the error
    res.status(500).json({ message: "Internal Server Error "}); // Send a generic error response
})

// MongoDB Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

// Listen on server routes
app.listen(SERVER_PORT, () => {
    console.log("The server is running at port 3000")
})