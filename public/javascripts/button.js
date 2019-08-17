if(window.location.pathname === '/'){
    const button = document.querySelector('.button-layout');
    
    button.classList.add('hide');

    function buttonAppear(){
        setTimeout(() => {
            button.classList.remove('hide');
            button.classList.add('appear');
        }, 2000);
    }

    function init(){
        buttonAppear();
    }

    init();
}