// require('dotenv').config()

let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/chatapp');

const app = require('express')();

const http = require('http').Server(app);
const userRoute = require('./routes/userRoute')

app.use('/', userRoute);

http.listen(3000, ()=>{
    console.log(`Server is running`)
});