const tableApi=(req,res)=>{
    try {
        const{number1,number2}=req.body
    let result=''
        for(let i=0;i<=number2;i++){
            result+=`${number1}  x  ${i}  =  ${number1*i} %`
        }
        res.json({
            Message:'table end point ',
            data:true,
            result:result

        })
    } catch (error) {
        res.json({
            Message:error.message,
            data:false,
            result:null
        })
    }
}


module.exports={tableApi}