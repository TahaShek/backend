const express=require('express')
const Router= express.Router()

const{ProductData}=require('../controller/productController')

Router.post('/ProductData',ProductData)
module.exports=Router