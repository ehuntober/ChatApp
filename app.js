require('dotenv').config()

let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/chatapp');

const app = require('express')();

const http = require('http').Server(app);

http.listen(3000, ()=>{
    console.log(`Server is running`)
});