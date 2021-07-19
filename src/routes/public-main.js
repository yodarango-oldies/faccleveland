const express  = require('express');
const router = new express.Router();

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/beliefs', (req, res)=>{
    res.render('beliefs');
})

router.get('/give', (req, res)=>{
    res.render('give');
})
module.exports = router