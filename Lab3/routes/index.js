'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(('/' || '/index'), function (req, res) { //when you default or click index
    res.render('index', { title: 'Lab 3' });
});
router.get('/saengsadeth', function (req, res) {
    res.render('saengsadeth', { title: 'Saengsadeth\'s Page', name: 'Saengsadeth' });
});
router.get('/symongkout', function (req, res) {
    res.render('symongkout', { title: 'Symongkout\'s Page', name: 'Symongkout' });
});
router.get('/simon', function (req, res) {
    res.render('simon', { title: 'Simon\'s Page', name: 'Simon' });
});
router.get('/cindy', function (req, res) {
    res.render('cindy', { title: 'Cindy\'s Page', name: 'Cindy' });
});
router.get('/tommy', function (req, res) {
    res.render('tommy', { title: 'Tommy\'s Page', name: 'Tommy' });
});
router.get('/timmy', function (req, res) {
    res.render('timmy', { title: 'Timmy\'s Page', name: 'Timmy' });
});
module.exports = router;
