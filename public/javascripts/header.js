function genRandomNumber(number){
    return Math.floor(Math.random() * number);
}

if(window.location.pathname === '/'){
    const header = document.querySelector('.index');
    const h3 = header.querySelector('h3');
    //Quotes For You

    const hello = [
        "명언으로 감동을 주세요",
        "명언으로 사랑을 주세요",
        "명언으로 희망을 주세요",
        "명언으로 자신감을 주세요",
        "명언으로 인생을 전해주세요"
    ]

    h3.innerText = hello[genRandomNumber(hello.length)];

    function init(){
        setTimeout(() => {
            h3.innerText = "Quotes For You";
            h3.classList.add('appear')
        }, 2000)
    }
    init();
}

if(window.location.pathname === '/add'){
    const header = document.querySelector('header');
    const h3 = header.querySelector('h3');

    const hello = [
        "멋진 명언을 적어주세요",
        "감동적인 명언을 적어주세요",
        "사랑스러운 명언을 적어주세요",
        "동기부여의 명언을 적어주세요"
    ]

    h3.innerText = hello[genRandomNumber(hello.length)];

    function init(){
        setTimeout(() => {
            h3.innerText = "Creating Quote"
            h3.classList.add('appear');
        }, 1000)
    }
    init();
}