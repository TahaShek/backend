const mongoose = require('mongoose');
const bcrypt=require('bcrypt')
const SaltRounds=parseInt(process.env.SALT_ROUND)
// Date
const today = new Date(); //date class
const day = today.getDate(); //day
const month = today.getMonth() + 1; //month
const year = today.getFullYear(); //year
const time = today.getTime(); //time 


// START of schemma
const UserRegisterSchemma=mongoose.Schema({
    FirstName:{type:String,required:true},
    LasttName:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    SaltString:{type:String,required:true},
    status: { type: Number, default: 1 },
    userPrivallege: { type: String,default:'User' },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }

},{timestamps:true})


userRegisterSchema.pre('save', async function(next){
    try {
        const genSalt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(this.password,genSalt);
        this.password = hashedPassword;
        this.saltString = genSalt;
        next();
    } catch (error) {
       return ({
        message:error.message,
        data:false,
        result:null
       })
    }
})


module.exports=mongoose.model('UserCollection',UserRegisterSchemma);
