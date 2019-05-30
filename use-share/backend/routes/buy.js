const router = require('express').Router();
const db = require('../config/database');

router.post('/:id', (req, res) => {
    console.log(req.params.id);
    res.json({buy : 'Your request for buy has been sent to the seller'})
})

module.exports = router;