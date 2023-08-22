const express = require('express');
const user_route = express();

const bodyParser = require('body-parser');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

user_route.set('view engine','ejs');
user_route.set('views','./views')

user_route.use(express.static('public'));

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'));
    },

    filename: function(req, file, cb) {
        const name = Date.now() + '_' + file.originalname; // Fixed syntax here

        cb(null, name);
    }
});

module.exports= user_route;












