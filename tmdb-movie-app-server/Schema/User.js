// const Mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

// const StringRqr =  {
//     type : String,
//     required:true
// }

// const UserSchema = Mongoose.Schema({
//     firstname : StringRqr,
//     lastname : StringRqr,
//     username : {
//         type : String,
//         required : true,
//         unique : true
//     },
//     password : StringRqr,
//     watchlist:[
//         {
//             _id : {
//                 type : String,
//                 required : true,
//                 unique : true
//             },
//             status : StringRqr
//         }
//     ]
// })

// UserSchema.pre('save',async function(next){
//     const hash = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password,hash)
//     next()
// })

// module.exports = Mongoose.model('User',UserSchema)