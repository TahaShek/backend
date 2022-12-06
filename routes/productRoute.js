const express=require('express')
const Router= express.Router()

const{ProductData,getProductData}=require('../controller/productController')

const{UploadProductImage}=require('../middlewares/media-middleware')

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData)
Router.get('/GetData',getProductData)

module.exports=Router