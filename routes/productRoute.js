const express=require('express')
const Router= express.Router()

const{ProductData,GetProductData}=require('../controller/productController')

const{UploadImage}=require('../middlewares/media-middleware')

Router.post('/ProductData',UploadImage.array('images',20),ProductData)
Router.get('/GetProductData',GetProductData)
module.exports=Router