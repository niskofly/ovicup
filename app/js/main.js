$(function () {

    //Слайдер с матчами

    let matches = new Swiper('.matches-slider', {
        slidesPerView: 6,
        spaceBetween: 21,
        infinity: true,
        loop: true,
        keyboard: true,
        rewind: true,

        // Navigation arrows
        navigation: {
            nextEl: '.matches-next',
            prevEl: '.matches-prev',
        },
    });

    //Слайдер с партнрами

    let partners = new Swiper('.partners-slider', {
        slidesPerView: 6,
        spaceBetween: 40,
        infinity: true,
        loop: true,
        keyboard: true,
        rewind: true,

        // Navigation arrows
        navigation: {
            nextEl: '.partners-next',
            prevEl: '.partners-prev',
        },
    });

    //Слайдер для статистики игроков на главной странице

    let players = new Swiper('.players-slider', {
        keyboard: true,
        navigation: {
            nextEl: '.players-next',
            prevEl: '.players-prev',
        },
    });

    //Табы для турнирной таблицы для главной страницы

    let tabs = document.querySelectorAll('.tab-card-js')
    let tabContent = document.querySelectorAll('.tab-content-js')

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', function () {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active')
            }
            tabs.forEach((elem) => {
                elem.classList.remove('active')
            })
            tab.classList.add('active')

            if (tabContent[i].classList.contains('active')) {
                tabContent[i].classList.remove('active')
            }
            tabContent.forEach((elem) => {
                elem.classList.remove('active')
            })
            tabContent[i].classList.add('active')
        })
    })

    // Глоссарий

    let glossaryButton = document.querySelector('.glossary-row__button')
    let glossary = document.querySelector('.glossary')

        glossaryButton.addEventListener('click', function (){
            glossary.classList.toggle('active')
            if (glossary.classList.contains('active')){
                glossary.style.maxHeight = glossary.scrollHeight + 'px'
            } else {
                glossary.style.maxHeight = 0
            }
        })

})
