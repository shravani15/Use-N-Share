const router = require('express').Router();
const db = require('../config/database');

router.get ('/', (req, res) => {
        db.query('SELECT products.product_id,products.name,products.price,products.description,products.image,products.size,products.user_id,products.address,products.google_location,reviews.user_name,reviews.product_id,reviews.review,reviews.rating FROM products INNER JOIN reviews ON products.user_id = reviews.user_id', (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
    
    router.post('/products', (req,res) => {
    db.query(`INSERT INTO products (product_id,name,price,description,image,size,category_id,user_id,address,google_location,rent,buy) VALUES ('${product_id}','${name}','${price}','${description}','${image}','${size}','${category_id}','${user_id}','${address}','${google_location}','${rent}','${buy}')`, (err,data) => {
        if(err) throw err;
        res.json(data);
    });
});


    

    router.post('/rent', (req,res) => {
        db.query(`INSERT INTO products (product_id,name,price,description,image,size,category_id,user_id,address,google_location,rent,buy) VALUES ('${product_id}','${name}','${price}','${description}','${image}','${size}','${category_id}','${user_id}','${address}','${google_location}','${rent}','${buy}')`, (err,data) => {
            if(err) throw err;
            res.json(data);
        });
    })

     router.delete('/name', (req,res) => {
         console.log(req.body);
    db.query(`DELETE FROM products where name ='{$name}'`, (err,data) =>{
        if (err) throw err;
        console.log('Item deleted successfully')
    })
});

module.exports = router;