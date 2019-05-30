const router = require('express').Router();
const db = require('../config/database');

router.get('/',(req,res) => {
    db.query('SELECT * FROM reviews', (err,data) => {
        if (err) throw err;
        res.json(data);
    })
});

// router.delete('/:user_name',(req,res)=>{
//     $user_name = $row['user_name'];
//     $user_id = $row['user_id'];
//     $review_id = $row['review_id'];
//     $product_id = $row['product_id'];
//     $review = $row['review'];
//     $rating = $row['rating'];
//    console.log(req.params.user_name);
//     db.query("DELETE FROM reviews where user_name =".$_GET[`user_name`], (err,data) => {
//         if (err) throw err;
//         console.log('review deleted successfully');
//     })                                                         
// })

router.delete("review/:user_id", (req , res)=>{
    db.query = ("DELETE FROM `reviews` WHERE `reviews`.`user_id`= `?`" ,[req.params.user_id],(err,data) => {
        if(err) throw err;
        console.log('review deleted successfully');
    })
   
});



module.exports = router;