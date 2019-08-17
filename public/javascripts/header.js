function genRandomNumber(seed){
    return Math.floor(Math.random() * seed);
}

if(window.location.pathname === '/'){
    const header = document.querySelector('header');
    const h3 = header.querySelector('h3');
    
    //Quotes for you

    const first_look = [
        "명언으로 사랑을 전해주세요",
        "명언으로 인생을 전해주세요",
        "명언으로 자신감을 전해주세요",
        "명언으로 도전심을 전해주세요",
        "명언으로 희망을 전해주세요",
        "명언으로 감동을 전해주세요",
        "명언으로 따뜻함을 전해주세요"
    ];

    h3.innerText = first_look[genRandomNumber(first_look.length)];

    function init(){
        setTimeout(() => {
            h3.classList.add('appear');
            h3.innerText = "Quotes For U";
        }, 1500);
    }

    init();
}