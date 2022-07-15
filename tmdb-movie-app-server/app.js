require('dotenv')
require('./routes/MongooseConn')
const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser");


//Err ECONNRESET
const net = require("net")
net.createServer((socket) =>{
    socket.on("error", (err) =>{
        console.log("Caught flash policy server socket error: ")
        console.log(err.stack)
    })
    socket.write("<?xml version=\"1.0\"?>\n")
    socket.write("<!DOCTYPE cross-domain-policy SYSTEM \"http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd\">\n")
    socket.write("<cross-domain-policy>\n")
    socket.write("<allow-access-from domain=\"*\" to-ports=\"*\"/>\n")
    socket.write("</cross-domain-policy>\n")
    socket.end()
}).listen(8080)
//Err ECONNRESET


const PORT = process.env.PORT || 4000;
const popularMovies = require('./routes/Movies.TMDB')
const AuthRoute = require('./routes/Auth')

app.set('trust proxy', 1) 
app.use(cors({
    origin : true,
    credentials : true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(popularMovies)
// app.use(AuthRoute)

app.get('/',(req,res)=>{
    console.log(process.env.PORT);
    res.send("HELLO")
})

app.listen(PORT,(_,res)=>{
    console.log(`Port is running successfully on : ${PORT}`);
}).setTimeout( 0)
