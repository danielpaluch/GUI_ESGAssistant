import express from "express";
import cors from "cors"
require('dotenv').config();

const connectDB = require('./config/db.js')

const app = express();
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

app.get('/api/test', (req, res) => {
    console.log('got request')
    res.json({ message: 'answer from Node.js' });
  });

console.log(process.env.MONGODB_URI)
connectDB();
const port = 5000;
app.listen(port,()=>{
    console.log("API served on http://localhost:" + port)
})