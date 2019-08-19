const express = require('express');
const router = express.Router();
const Quotes = require('../models/quote');

let preNumber = 0;

function genRandomNumber(seed){
    return Math.floor(Math.random() * seed);
}

function getAnotherSeed(length, seed){
    while(true){
        let anotherSeed = genRandomNumber(length);
        if(anotherSeed !== seed){
            return anotherSeed;
        }
    }
}


router.get('/', async (req, res) => {
    let quotes = await Quotes.find().exec();
    if(quotes[0] === undefined){
        quotes.push({
            quote: null,
            person: null,
        })
    }
    
    const number = genRandomNumber(quotes.length);
    preNumber = number;

    let number = genRandomNumber(quotes.length);
    while(preNumber === number){
        number = genRandomNumber(quotes.length);
    }
    preNumber = number;

    const quoteInfo = quotes[genRandomNumber(quotes.length)];
    const quote = quoteInfo.quote;
    const person = quoteInfo.person;

    let ad_db_one = null;
    let ad_db_two = null;

    if(quoteInfo.character === 'love' || quoteInfo.character === 'hope' || quoteInfo.character === 'friend' || quoteInfo.character === 'parting' || quoteInfo.character === 'life'){
        const personalDB = require('../db/personal-db');
        const seed = genRandomNumber(personalDB.length);
        const anotherSeed = getAnotherSeed(personalDB.length, seed);
        
        ad_db_one = personalDB[seed];
        ad_db_two = personalDB[anotherSeed];

    }else if(quoteInfo.character === 'success' || quoteInfo.character === 'time' || quoteInfo.character === 'effort' || quoteInfo.character === 'challenge' || quoteInfo.character === 'confidence' || quoteInfo.character === 'study' || quoteInfo.character === 'reading'){
        const successDB = require('../db/success-db');
        const seed = genRandomNumber(successDB.length);
        const anotherSeed = getAnotherSeed(successDB.length);

        ad_db_one = successDB[seed];
        ad_db_two = successDB[anotherSeed];

    }else{
        
    }

    res.render('index', {quote: quote, person: person, ad_db_one: ad_db_one, ad_db_two: ad_db_two});
    
})

module.exports = router;