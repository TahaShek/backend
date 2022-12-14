// const { emit } = require('../models/productModel')
const UserManagementSchemma=require('../models/userModel')



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
        Error: error.message,
        Data: false,
        Result: null
    })
 }
}


module.exports={UserRegistration}