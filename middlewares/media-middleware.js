// DEPENDENCIES 
const multer=require('multer')
const crypto=require('crypto')
const fs =require('fs')
 
// // fucnction for the refrence name ....basically this function converts the filename into hex form 
// const hashfunc=(filename)=>{
// const hash =crypto.createHash('md5')
// hash.update(filename)
// const md5Summary=hash.digest('hex')
// return md5Summary
// }


// // store image path funciton ....handle its extension etc 
// let UploadImage =multor({
//     storage:multor.diskStorage({
//         destination:(req,next,cb)=>{
//             let path=`./assests/Product/${req.body.productName}`;
//             if(!fs.existsSync(path)){
//                 fs.mkdirSync(path,function(err,res){
//              if(err){
//                 res.json(err)
//              }
//              else{
//                 res.json('Saved Succefully');

//              }
//                 })
//             }
//             cb(null,path);
//         },
//         filename:(req,file,cb)=>{
//             const md5Summary=hashfunc(file.originalname)
//             //originalname is the uploaded file's name with date iso String
//           let ext=file.mimetype.split('/')[1]
//            // Fix svg+xml bug
//            if (ext.includes('svg')) {
//             ext = 'svg';
//         }
        
//         cb(null,`${Date.now()}_${md5Summary}.${ext}`)

//         }
//     })
// })

//Block Start For Hashing the ImageUrl
const hashFunc = (fileName) => {
    const hash = crypto.createHash('md5');
    hash.update(fileName); 
    const md5sum = hash.digest('hex');
    return md5sum;
};
//Block Ends For Hashing the ImageUrl


//Block Start MiddleWare For handling The Single Image WIth HashFunction.
let UploadImage = multer({
    storage: multer.diskStorage({
        destination: (req, next, cb) => {
            let path = `./assests/Product/${req.body.productName}`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, function (err, res) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json('Saved Succefully');
                    }
                });
            }
            cb(null, path);
        },
        filename: (req, file, cb) => {
            const md5sum = hashFunc(file.originalname);
            //originalname is the uploaded file's name with date iso String
            let ext = file.mimetype.split('/')[1];
            // Fix svg+xml bug
            if (ext.includes('svg')) {
                ext = 'svg';
            }
        

            cb(null, `${Date.now()}_${md5sum}.${ext}`);
        }
    })
});

module.exports={ UploadImage } 