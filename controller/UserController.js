// const { emit } = require('../models/productModel')
const UserManagementSchemma=require('../models/userModel')
const bycrypt=require('bcrypt')
const jwt=require('jsonwebtoken')



const UserRegistration =async (req,res)=>{
 try {
    const {firstName,lastName,email,password}=req.body
    const checkIFAdminAlreadyExists=await UserManagementSchemma.findOne({
      email:email
    })

    if(checkIFAdminAlreadyExists?.userPrivilege==='Admin'){
        return res.json({
            message: 'Something went wrong Please ask Admin!',
            Status: null,
            Data: false
        })
    }

    let IdentifyAdmin=email.split('@')[0];
    IdentifyAdmin=IdentifyAdmin.toLowerCase();
    if(IdentifyAdmin==='admin'){
        const  adminToCreate =new UserManagementSchemma({
            firstName,lastName,email,password,userPrivilege:'Admin'
        })
        const adminToSave=await adminToCreate.save();
        return res.json({
            message:'Register Successfully',
            data:true
        })
    }

const userResgiteration=new UserManagementSchemma({
    firstName, lastName, email, password

})
const userToSave =await userResgiteration.save();
res.json({
    message:'Register Successfully',
    data:true
})

 } catch (error) {
    res.json({
        error: error.message,
        data: false,
        result: null
    })
 }
}


const UserLogin=async(req,res)=>{
    try {
    const {email,password}=req.body    
     const UserExistence=await UserManagementSchemma.findOne({
        email:email
     })
     if(Object.keys(UserExistence).length===0){
        return res.json({
            message:'email or password failed ',
            data:false
        })
     }

     const checkUserPassword=await bycrypt.compare(password,UserExistence.password);
     if(checkUserPassword===false){
        return res.json({
            message:'email or password failed ',
            data:false
        })
     }
     

    const token= jwt.sign(
        {
            name:'hi'
        },
        
    )

    } 
    catch (error) {
        res.json({
            error: error.message,
            data: false,
            result: null
        })
    }
}


module.exports={UserRegistration,UserLogin}