const express=require('express');
const Router=express.Router()


const {UserRegister}=require('../controller/UserController');

 
Router.post('/UserRegister',UserRegister);
module.exports=Router