//features

const changeFeaturesContent = (urlImg, title, text, imgs) => {
    document.querySelector('.features-content__img').innerHTML = `<img src="/img/${urlImg}" alt="">`;
    document.querySelector('.features-content__img').style.cssText = `margin-left: 0`;
    document.querySelector('.features-content__title').innerHTML = title;
    document.querySelector('.features-content__desc').innerHTML = text;

    document.querySelector('.features-content__pic').innerHTML = '';
    imgs.forEach(i => {
        document.querySelector('.features-content__pic').insertAdjacentHTML('beforeend',`
            <img src="/img/${i}" alt="">
        `)
    })
}
let text = "Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно.",
    textLarge = "Подключите один из надежных сервисов: Яндекс.Деньги, Яндекс.Касса, PayPal, Robokassa или Stripe, и ваши покупатели смогут безопасно оплатить товар или услугу картой Visa или Mastercard, Яндекс.Деньгами, со счета мобильного телефона, через Сбербанк Онлайн или Альфа Клик.";



document.querySelectorAll('.features-links__item').forEach(item => {

    item.addEventListener('click', e => {
        let target = e.target;
        
        if(!target.classList.contains('features-link__active')) {
            document.querySelector('.features-link__active').classList.toggle('features-link__active');
            target.classList.toggle('features-link__active');
            switch(target.innerHTML){
                case "Безопасность":
                    changeFeaturesContent("secure.svg", "Принимайте картой,пустые нули !", text, ['letsEncrypt.png'])
                    document.querySelector('.features-content__img').style.cssText = `margin-left: -1.8vw`;
                    break;
                case "CRM&amp;1C":
                    changeFeaturesContent("crm.svg", "Интегрируем неинтегрируемое!", text, []);
                    break;
                case "Онлайн оплата":
                    changeFeaturesContent("pay.svg", "Принимайте платежи картой, с помощью удобных платежных систем!", textLarge, ['sber.svg', 'yaKassa.svg', 'robokassa.svg'])
                    break;
            }
        }

    })
})

//clients

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
  });









