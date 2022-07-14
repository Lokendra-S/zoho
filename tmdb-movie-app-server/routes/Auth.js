const Mongoose = require('mongoose')
const User = require('../Schema/User')
const express = require('express')
const Router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const MAX_AGE = 3 * 24 * 60 * 60
const SignUp = (req,res) => {
    const body = req.body
    try{
        if ( body.password === body.confirmpassword ){
            const user = new User({
                firstname : body.firstname,
                lastname : body.lastname,
                username : body.username,
                password : body.password,
                confirmpassword : body.confirmpassword
            })
            user.save()
            res.send({'signup':'success'})
        }else{
            res.send({'signup': 'failed','error':'passwords does not match'})
        }
    }catch(e){
        console.log(e);
        res.send({'signup':'failed','error':'please check you internrt connection'})
    }
}

const Login = async(req,res) => {
    const {
        username,
        password
    } = req.body

    const user = await User.findOne({"username" : username})
    if(user){
        const passCompare = await bcrypt.compare(password,user.password)
        if ( passCompare ){
            // var token = jwt.sign({ foo: 'bar' }, 'shhhhh',{ expiresIn: '1h' });
            const id = user._id
            const token =  jwt.sign({ id },"Movie-App",{
                expiresIn : MAX_AGE
            })
            res.cookie("token", {token}, { httpOnly: true, maxAge: MAX_AGE * 1000 });
            res.send({"login" : 'success'})
        }else{
            res.send("Ere")
        }
    }
    else{
        res.send("err")
    }
}

const updateWatchlist = async (req,res) => {
    const { username } = req.body
    await User.findOneAndUpdate({"username" : username},{
        $push:{
            watchlist:{
                _id : 550,
                status : 'watching'
            }
        }
    }).then((data) => {
        res.send({userdata : data})
    }).catch((e) =>{
        res.send({ error : e})
    })
    
}

const getRes = async(req,res) => {
    res.send({'user':"user"})
}

const egtCount = async(req,res) => {
    const user = await User.findOne({'username' : 'Lokendra.S'})
    res.send(res.cookies[token])
    // res.send({"user": user.watchlist.length
    //     ,"use":user.watchlist})
}

const getLocal = async (req,res,next) => {
    const token = req.cookies.jwt
    console.log(token)
    if (token) {
        jwt.verify(token, "Movie-App", async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                console.log(res.locals.user)
                next();
            }
        });
    }else{
        res.locals.user = null
    }
}


Router.post('/signup',SignUp)
Router.post('/Login',Login)
Router.post('/updateWatchlist',updateWatchlist)
Router.get('/verify',getLocal,getRes)
Router.get('/try',getLocal,egtCount)


Router.get('/set',(req,res)=>{
    res.cookie('username', 'john doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
})
Router.get('/get',(req,res)=>{
    var username = req.cookies['username'];
    if (username) {
        return res.send(username);        
    }

    return res.send('No cookie found');
})

module.exports = Router