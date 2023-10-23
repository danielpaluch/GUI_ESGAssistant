import express from "express";
import cors from "cors"
require('dotenv').config();

const connectDB = require('./config/db.js')

const app = express();
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

app.get("/api", (req, res)=>{
})

console.log(process.env.MONGODB_URI)
connectDB();
const port = 5000;
app.listen(port,()=>{
    console.log("API served on http://localhost:" + port)
})