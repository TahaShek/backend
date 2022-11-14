// BLOCK START DEPENDENCIES
const express=require('express')
const loadVariable=require('./configration/loadmyVariable')
const DataBase=require('./configration/database')
const cors=require('cors')
const path=require('path')
// BLOCK START DEPENDENCIES

// BLOCK START INITLIZATION
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.raw())
app.use(express.text())
app.use(cors())
// app.use('/assests',express.static('assests'))
app.use('/assets', express.static('assets'));
const PORT=process.env.PORT
// BLOCK START INITLIZATION


// //Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    console.log(req.body);
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other rou
}); 

// api routes

// const testing=require('./routes/testingRoute')
// const get=require('./routes/testingRoute')
// const formData=require('./routes/login-route')
// const table=require('./routes/table-route')
// app.use('/table',table)
// app.use('/formData',formData)
// app.use('/get',get)
// app.use('/testing',testing)
// api routes

const ProductDataToDatabase=require('./routes/productRoute')
const GetProductDataFromDatabase =require('./routes/productRoute')
app.use('/GetProductDataFromDatabase',GetProductDataFromDatabase)
app.use('/ProductDataToDatabase',ProductDataToDatabase)

// //Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});
// //End Block Checking Routes As express not found Url not Founded we need to do it explicitly 



//Start Block For Listening Your App On Defined Port
app.listen(PORT,()=>{
    console.log(`your port is ${PORT}`)
    console.log(process.env)
})