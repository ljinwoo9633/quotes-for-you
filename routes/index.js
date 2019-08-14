const express = require('express');
const router = express.Router();
const Quotes = require('../models/quote');

function genRandomNumber(seed){
    return Math.floor(Math.random() * seed);
}

router.get('/', async (req, res) => {
    let quotes = await Quotes.find().exec();
    if(quotes[0] === undefined){
        quotes.push({
            quote: null,
            person: null,
        })
    }
    const quote = quotes[genRandomNumber(quotes.length)].quote;
    const person = quotes[genRandomNumber(quotes.length)].person;
    res.render('index', {quote: quote, person: person});
    
})

module.exports = router;