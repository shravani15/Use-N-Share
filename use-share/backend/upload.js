const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
;


aws.config.update({
   secretAccessKey: "Ls0jWtsg21ZXa6o2HuHPh6By2jccmvxDl/BDpOP1",
   accessKeyId:"AKIA2OBSMFFS4J4WMF6K",
   region:"us-east-1"
})

const s3 = new aws.S3();
const upload = multer({
   storage: multerS3({
       s3:s3,
       bucket:"usenshare-images",
       acl:'public-read',
       metadata:function (req,file,cb) {
           cb(null, {fieldName:file.fieldname})
       },
       key: function(req,file,cb){
           cb(null,Date.now().toString())
       }
   })
})

module.exports=upload;