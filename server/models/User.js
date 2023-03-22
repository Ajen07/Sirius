import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,'Please provide your name'],
        trim:true,
        minlength:3,
        maxlength:50,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide a valid email',
        },
        unique: true,
      },
    password:{
        type:String,
        require:[true,'Please provide password'],
        trim:true,
        minlength:[8,'Length is too small'],
        select:false
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'my city',
      },
    
})

UserSchema.methods.createJWT=(user)=>{
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME});
    return token;
  }
  
  UserSchema.methods.comparePassword=async function(candidatePassword){
    const isMatch=await bcrypt.compare(candidatePassword,this.password);
    return isMatch;
  }
  
  UserSchema.pre('save',async function (){
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt)
  })

export default mongoose.model('User',UserSchema);