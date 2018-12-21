const router = require('express').Router();

router.get('/test', (req,res) => {
    res.send({
        successs: true,
        message: 'API Test Working'
    });
});

module.exports = router;
