const router = require('express').Router();
const db = require('../config/database');

router.get('/:email', (req, res) => {
    console.log(req.params.email);
    db.query(`SELECT * FROM user WHERE email='${req.params.email}'`, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

module.exports = router;