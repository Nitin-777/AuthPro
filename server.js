import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import express from 'express'


connectDB()

app.listen(3000,() =>{
    console.log("Server is running in port 3000")
})