const ProductModelSchema =require('../models/productModel')
const fs=require('fs')
// const productModel = require('../models/productModel')


const ProductData=async (req,res )=>{
try {
    const{productName,price,categories,flavour,description,size,Quantity}=req.body
    let ImageDetails=[]
    let Size=size.split(',')
    req.files.forEach(element => {
        const {filename,orignalname,mimetype}=element
        ImageDetails.push({
            ImageUrl:`assets/Product/${productName}/${filename}`,
            ImageName:orignalname,
            ImageMimeType:mimetype
        })
    });
    // creating collection in database 
    const documentoCraete=  new ProductModelSchema({
        productName,price,description,categories,size:Size,Quantity,flavour,
        ImageDetail:ImageDetails
    })
    // if data is saved this will be the response 
    const documentoSave=await documentoCraete.save();
    res.json({
        message:"Data SentSuccessful ",
        data:true,
        Body:documentoSave
    })
} catch (error) {
  res.json({
    message: error.message,
    Result: null,
    Data: false
  })
}
}

getProductData= async(req,res)=>{
    try {
        
        const DocumentToGet=await ProductModelSchema.find()
        res.json({
            message: 'All Documents Found',
            Data: true,
            result:DocumentToGet
        })
    } catch (error) {
        res.json({
            message: error.message,
            Result: null,
            Data: false
          })
    }
}


const SoftDelete=async (req,res)=>{
   try {
    
    const ID=req.params._id
    const documentSoftDelete=await ProductModelSchema.updateOne(
        {id:ID},
        {$set:{softDeleteStatus:1}}
    )
    res.json({
        message:"Delete SUCCESSFULLY",
        result:documentSoftDelete,
        data:true
    })


   } catch (error) {
    res.json({
        message: error.message,
        Result: null,
        Data: false
      })
   }
}


module.exports={ProductData,getProductData,SoftDelete}