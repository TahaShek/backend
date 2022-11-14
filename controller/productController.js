const ProductModelSchema =require('../models/productModel')

const ProductData=async (req,res )=>{
try {
    const{productName,quantity,price,category,companyName,description,size,color}=req.body
    let ImageDetails=[]
    let Size=size.split(',')
    req.files.forEach(element => {
        const {filename,orignalname,mimetype}=element
        ImageDetails.push({
            ImageUrl:`assets/Product/${productName},${filename}`,
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

// const GetProdcutData=async(req,res)=>{
// try {
    
//     const documentToGet=await ProductModelSchema.find();
//     res.json({
//         message:"all document found",
//         Result:documentToGet,
//         data:true

//     })

// } catch (error) {
//     res.json({
//         message: error.message,
//         Result: null,
//         Data: false
//       })
// }
// }


const GetProductData = async (req, res) => {
    try {
        // const DocToGet = await ProductModel.findOne(
        //     { Status: 0 }, //Condition
        //     { ProductPrice: 0 } //Projecttion
        //     //Options
        // );
        const docToGet = await ProductModelSchema.find();
        res.json({
            Message: 'All Documents Found',
            Data: true,
            result: docToGet
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}




module.exports={ProductData,GetProductData}