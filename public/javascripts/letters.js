if(window.location.pathname === "/help"){
    const question = document.querySelector('.question');
    const answer = document.querySelector('.answer');
    const paragraph = document.querySelector('.paragraph');

    const p_one = paragraph.querySelector('.p_one');
    const p_two = paragraph.querySelector('.p_two');
    const p_three = paragraph.querySelector('.p_three');
    const p_four = paragraph.querySelector('.p_four');
    
    const caution = document.querySelector('.caution');

    function questionAppear(){
        setTimeout(() => {
            question.classList.add('appear');
            question.innerHTML = "Why Make This Page?";
        }, 1000);
    }

    function answerAppear(){
        setTimeout(() => {
            answer.classList.add('appear');
            answer.innerHTML = "\"여러분의 명언도 뛰어난 가치를 지니고 있습니다\""
        }, 1500)
    }

    function paragraphAppear(){
        setTimeout(() => {
            paragraph.classList.add('appear');
            p_one.innerHTML = "명언은 여러분의 철학을 키워주는 도구입니다";
            p_two.innerHTML = "평범한 우리들의 명언도 유명한 명언 못지않은";
            p_three.innerHTML = "가치를 지니고 있다고 생각하여";
            p_four.innerHTML = "서로의 명언을 보고 생각할 수 있는 페이지를 만들었습니다";
        }, 2000);
    }

    function cautionAppear(){
        setTimeout(() => {
            caution.classList.add('appear');
            caution.innerHTML = "불순한 내용은 삭제합니다";
        }, 2500);
    }

    function init(){
        questionAppear();
        answerAppear();
        paragraphAppear();
        cautionAppear();
    }

    init();
}