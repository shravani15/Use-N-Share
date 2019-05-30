const router = require('express').Router();
const db = require('../config/database');

router.post('/:id', (req, res) => {
    console.log(req.params.id);
    res.json({rent : 'Your request for rent has been sent to the renter'})
})

module.exports = router;