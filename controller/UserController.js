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

        
    } 
    catch (error) {
        
    }
}