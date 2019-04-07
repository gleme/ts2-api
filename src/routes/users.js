var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.status(200).json({ message: 'Respond with a resource' });
});


module.exports = router;
