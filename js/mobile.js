
//accordion
let accordion = document.querySelector('.accordion');

    //accordion style

    let accordion_line = document.querySelector('.accordion-line');
    accordion_line.style.cssText = `max-height: ${accordion.offsetHeight};`;

    const insertSquares = () => {
        accordion_line.innerHTML = ``;
        let i = Math.floor((Math.floor(Math.floor(accordion.offsetHeight)*100/window.screen.height)-3) / 2.5);
        for(let j=0; j<i; j++){accordion_line.insertAdjacentHTML('beforeend', `<span class="square" style="margin-top:${j*2.5}vh"></span>`);}
    }
    insertSquares();


    window.addEventListener('resize', e => insertSquares());
    let accordionSize = accordion.offsetHeight;
    accordion.addEventListener('click', e => {
        if(accordion.offsetHeight != accordionSize){
            accordionSize = accordion.offsetHeight;
            insertSquares();
        }
    })
    

    //accordion func
document.querySelectorAll('.accordion-item__head').forEach(item => {
    item.addEventListener('click', e => {
        if(!item.parentNode.querySelector('.accordion-item__content').classList.contains('show')){
            document.querySelectorAll('.accordion-item__content').forEach(i => {
                if(i.classList.contains('show')) i.classList.toggle('show')
            })
            document.querySelectorAll('.accordion-item__arrow').forEach(arr => {
                arr.style.cssText = `transform: rotate(${0}deg)`;
            })
            item.parentNode.querySelector('.accordion-item__content').classList.toggle('show');
            item.querySelector('.accordion-item__arrow').style.cssText = `transform: rotate(${180}deg)`;
        } else{
            item.parentNode.querySelector('.accordion-item__content').classList.toggle('show');
            item.querySelector('.accordion-item__arrow').style.cssText = `transform: rotate(${0}deg)`;
        }
        
    })
})



//slick slider
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1
    });
  });


  //form

document.querySelector('.form-check').addEventListener('click', e => {
    let t = e.target;
    t.classList.toggle('form-check__checked')
})

