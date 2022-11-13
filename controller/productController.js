const ProductModelSchema =require('../models/productModel')

const ProductData=async (req,res )=>{
try {
    const{productName,quantity,price,category,companyName,description,size,color}=req.body
    let ImageDetails=[]
    let Size=size.split(',')
    req.files.forEach(element => {
        const {filename,orignalname,mimetype}=element
        ImageDetails.push({
            ImageUrl:`assests/Product/${productName},${filename}`,
            ImageName:orignalname,
            ImageMimeType:mimetype
        })
    });
    // creating collection in database 
    const documentoCraete=  new ProductModelSchema({
        productName,quantity,price,description,category,size:Size,color,companyName,
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





module.exports={ProductData}