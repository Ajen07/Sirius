import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,'Please provide your name'],
        trim:true,
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        require:[true,'Please provide your email'],
        trim:true
    },
    password:{
        type:String,
        require:[true,'Please provide password'],
        trim:true,
        minlength:[8,'Length is too small'],
    },
    
})

export default mongoose.model('User',UserSchema);