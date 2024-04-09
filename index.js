// import express in module syntax
import express from "express";

// import dotenv in module syntax
import dotenv from 'dotenv';
dotenv.config()

// put express into app constant to call express using app
const app = express()

// declare port number for backend(8000) to call the server
const port = process.env.PORT 

// calling callback function to put something into home page
app.get("/", (req, res) => {
    res.send("<h1>Rupam Chakraborty</h1>")
})

// calling callback function to put something into about page
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
})


app.listen(port, () => {
    console.log(`server running at port: ${port}`)
})