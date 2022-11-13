const express=require('express')
const Router= express.Router()

const{ProductData,GetProdcutData}=require('../controller/productController')

const{UploadImage}=require('../middlewares/media-middleware')

Router.post('/ProductData',UploadImage.array('images',20),ProductData)
Router.get('/GetProductData',GetProdcutData)
module.exports=Router