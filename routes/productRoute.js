const express=require('express')
const Router= express.Router()

const{ProductData}=require('../controller/productController')

const{UploadImage}=require('../middlewares/media-middleware')

Router.post('/ProductData',UploadImage.array('images',20),ProductData)
module.exports=Router