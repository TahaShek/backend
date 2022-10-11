const express=require('express')
const Router =express.Router()


// const {postApi,getapi}=require('../controller/testingControll')
const{postApi,getapi}=require('../controller/testingControll')

Router.post('/postApi',postApi)
Router.get('/getapi',getapi)
module.exports=Router