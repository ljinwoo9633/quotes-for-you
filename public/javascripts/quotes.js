if(window.location.pathname === '/'){
    const quote = document.querySelector('.quote-quote');
    const person = document.querySelector('.quote-person');
    const ad = document.querySelector('.ad');


    quote.classList.add('hide');
    person.classList.add('hide');
    ad.classList.add('hide');

    function quoteAppear(){
        setTimeout(() => {
            quote.classList.remove('hide');
            quote.classList.add('appear');
        }, 500)
    }

    function personAppear(){
        setTimeout(() => {
            person.classList.remove('hide');
            person.classList.add('appear');
        }, 1000);
    }

    function adAppear(){
        setTimeout(() => {
            ad.classList.remove('hide');
            ad.classList.add('appear');
        },1500)
    }

    function init(){
        quoteAppear();
        personAppear();
        adAppear();
    }

    init();
}