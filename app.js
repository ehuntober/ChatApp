require('dotenv').config()

let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/chatapp');

const app = require('express');