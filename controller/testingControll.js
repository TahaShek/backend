const postApi=(req,res)=>{
try {
    
    let data=req.body;
    res.json({
        Messsage:'you have reached',
        data:true,
        result:data
    })
} catch (error) {
    res.json({
        data:false,
        message:'fail'
    })
}

}







const getapi=(req,res)=>{
try {
       let result=''
    let number=[1,2,3,4,5]
    
    number.forEach((element)=>{
           result+= `2   x   ${element}   =   ${element*2}%` 
    })
    res.json({
       message:'you have reached',
       data:true,
       result:result
    })
} catch (error) {
    res.json({
        message:error.message,
        data:false,
        result:null
    })
}
}


module.exports={postApi,getapi}