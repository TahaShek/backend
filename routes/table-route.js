const express=require('express')
const Router=express.Router()


const{tableApi}=require('../controller/table-controller')
Router.post('/tableApi',tableApi)
module.exports=Router