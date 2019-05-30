const router = require('express').Router();
const db = require('../config/database');

// router.get('/:email', (req, res) => {
//     let query = `SELECT * FROM user CROSS JOIN rent ON user.user_id = rent.buyer_id OR user.user_id = rent.seller_id WHERE email = '${req.params.email}'`;
//     db.query(query, (err, data) => {
//         if (err) throw err;
//         console.log(data);
//         res.json(data);
//     })
// })

module.exports = router;