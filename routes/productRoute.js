const express=require('express')
const Router= express.Router()

const{ProductData,getProductData,SoftDelete,HardDelete,GetParticularProductData,UpdateProductById}=require('../controller/productController')

const{UploadProductImage}=require('../middlewares/media-middleware')

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData)
Router.get('/GetData',getProductData)
Router.delete('/SoftDelete/:_id',SoftDelete)
Router.delete('/HardDelete/:_id',HardDelete)
Router.get('/GetParticularProductData/:_id',GetParticularProductData)
Router.post('/UpdateProductById',UpdateProductById)

module.exports=Router