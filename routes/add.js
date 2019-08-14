const express = require('express');
const router = express.Router();
const Quotes = require('../models/quote');

router.get('/', (req, res) => {
    res.render('add/index');
})

router.post('/', async (req, res) => {
    let errors = [];
    
    await Quotes.findOne({quote: req.body.quote})
    .then(quote => {
        if(quote){
            errors.push({message: 'Quotes Alreadt exsits'})
            res.render('add/index', {
                errors
            })
        }else{
            const newQuote = new Quotes({
                quote: req.body.quote,
                person: req.body.person,
                character: req.body.character
            })
            newQuote.save()
            .then(quote => {
                res.redirect('/');
            })
            .catch(err => console.log(err));
        }
    })
})

module.exports = router;