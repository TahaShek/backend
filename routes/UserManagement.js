const express=require('express');
const Router=express.Router()


const {UserRegistration,UserLogin}=require('../controller/UserController');

 
Router.post('/UserRegister',UserRegistration);
Router.post('/UserLogin',UserLogin)
module.exports=Router