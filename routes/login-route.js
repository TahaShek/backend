const express=require('express')
const Router=express.Router()


const{loginApi}=require('../controller/login-controller')
Router.post('/loginApi',loginApi)

module.exports=Router