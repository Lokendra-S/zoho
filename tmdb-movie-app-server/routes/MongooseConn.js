const Mongoose = require('mongoose')
const DB_URI = 'uri'

Mongoose.connect(DB_URI,{
    
})
.then((data) => {
    console.log("Connected Successfully");
})
.catch((e) => {
    console.log(e);
})