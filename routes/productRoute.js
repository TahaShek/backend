const express=require('express')
const Router= express.Router()

const{ProductData,GetProductData,GetProductById,SoftDelete}=require('../controller/productController')

const{UploadImage}=require('../middlewares/media-middleware')

Router.post('/ProductData',UploadImage.array('images',20),ProductData)
Router.get('/GetProductData',GetProductData)
Router.get('/GetProductById/:_id',GetProductById)
Router.delete('/SoftDelete/:_id',SoftDelete)
module.exports=Router