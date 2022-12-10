// const 
// accquiring model 
const UserScheema=require('../models/userModel')

const UserRegister=async(req,res)=>{
    try {
        const {FirstName,LastName,Email,Password}=req.body
        const checkIfAdminExists=await UserScheema.findOne({
            email:Email
        })

        if(checkIfAdminExists?.userPrivallege==='Admin'){
          
            return res.json({
                message:'something went wrong ask admin',
                status:null,
                data:false
            })
        }
        
        
   let CheckAdminIdentity=Email.split('@')[0];
   CheckAdminIdentity=CheckAdminIdentity.to0LowerCase();
   if(CheckAdminIdentity==='admin'){
     const adminToCreate=new UserScheema({
        FirstName,LastName,Email,Password,userPrivallege:'Admin'
     })
     AdminToSave=await adminToCreate.save()
     return res.json({
        message:'register Successfuly',
        data:true
     })
   }

let UserToCreate= new UserScheema({
    FirstName,LastName,Email,Password
})
const userToSave=await UserToCreate.save()
res.json({
    message:'register Successfuly',
    data:true
})

 } 


    catch (error) {
        res.json({
            error: error.message,
            data: false,
            result: null
        })
    }
}

module.exports={UserRegister}