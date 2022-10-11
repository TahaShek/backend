const Package=require('../package.json')
const mongoose=require('mongoose')

mongoose.connect(`${process.env.MONGO_URI}`,{ useNewUrlParser:true, useUnifiedTopology:true}, (error,connection) => {
    if (!error) {
        console.log('MDataBase');
        // console.log("Your App Has the Following Dependicies\n");
        // for (dependencies in Package.dependencies) {
            // console.log(dependencies);
        // }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
});