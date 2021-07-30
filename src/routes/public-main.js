const express  = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/beliefs', (req, res)=>{
    res.render('beliefs');
})

module.exports = router