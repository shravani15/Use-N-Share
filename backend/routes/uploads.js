const router = require('express').Router();
const db = require('../config/database');
const upload = require('../upload');


const singleUpload = upload.single('image');

router.post('/',(req,res) => {
   singleUpload(req,res, function(err,data) {
       if (err) {
           // return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
           return console.log(err);
         }
         else{
         return res.json({'imageUrl': req.file.location});
         }
   })
})

module.exports= router;