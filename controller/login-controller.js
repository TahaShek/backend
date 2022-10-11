const loginApi=(req,res)=>{
    try {
        let{email,password}=req.body
        res.json({
            Message:'login end point',
            data:true,
            result:email,
            result2:password
        })
    } catch (error) {
        res.json({
            Message:error.message,
            data:false,
            result:null
        })
    }
}


module.exports={loginApi}