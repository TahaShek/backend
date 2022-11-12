const { Model } = require('mongoose')
const ProductModelSchema =require('../models/productModel')

const ProductData=async (req,res )=>{
try {
    const{productName,quantity,price,description,color,compnayName,category,productMaterial,size}=req.body
    let ImageDetails=[]
    let Size=size.split(',')
    req.files.forEach((element) => {
        const {filename,orignalname,mimetype}=element
        ImageDetails.push({
            ImageUrl:`assests/Product/${productName},${filename}`,
            ImageName:orignalname,
            ImageMimeType:mimetype
        })
    });
    // creating collection in database 
    const documentoCraete=  new ProductModelSchema({
        productName,quantity,price,description,color,compnayName,category,productMaterial,size:Size,
        imageDetails:ImageDetails
    })
    // if data is saved this will be the response 
    const documentoSave=await documentoCraete.save();
    res.json({
        Messsage:"Data iz here ",
        data:true,
        Body:documentoSave
    })
} catch (error) {
  res.json({
    Message: error.mesage,
    Result: null,
    Data: false
  })
}
}

module.exports={ProductData}