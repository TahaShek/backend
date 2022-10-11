const dotenv=require('dotenv')
let myEnviroment={}
if(process.env.NODE_ENV ==='testing'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../application-test.env`});
}
if(process.env.NODE_ENV ==='development'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../application-develop.env`});
}
if(process.env.NODE_ENV ==='production'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../application-prod.env`});
}
console.log(myEnviroment)
