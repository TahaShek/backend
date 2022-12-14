const express=require('express');
const Router=express.Router()


const {UserRegistration}=require('../controller/UserController');

 
Router.post('/UserRegister',UserRegistration);
module.exports=Router