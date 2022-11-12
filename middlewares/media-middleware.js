// DEPENDENCIES 
const multor=require('multer')
const crypto=require('crypto')
const fs =require('fs')
 
// fucnction for the refrence name ....basically this function converts the filename into hex form 
const hashfunc=(filename)=>{
const hash =crypto.createHash('md5')
hash.update(filename)
const md5Summary=hash.digest('hex')
return md5Summary
}
