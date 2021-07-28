var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json([
        {name: '讀書', complated: false, id: "i1"},
        {name: '寫作業', complated: false, id: "i2"},
        {name: '畫畫', complated: false, id: "i3"},
    ])
});

module.exports = router;
