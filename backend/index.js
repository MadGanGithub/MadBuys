import app from "./app.js";
import dotenv from "dotenv";
import connectionDB from "./config/database.js";

//Basic setting
dotenv.config({path:"backend/config/config.env"});

//Setting up database connection
connectionDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server started working on port: ${process.env.PORT} in ${process.env.NODE_ENV}` )
})