// Инициализируем Swiper
if (document.querySelector('.product-slider')) {
    new Swiper('.product-slider', {
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // Курсор перетаскивания
        grabCursor: true,
        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить только когда слайдер в пределах вьюпорта
            onlyInViewport: true,
        },
        // Скорость
        speed: 500,
        // Миниаютюры
        thumbs: {
            swiper: {
                el: '.product-mini-slider',
                slidesPerView: 3,
                breakpoints: {
                    560: {
                        slidesPerView: 5,
                    }
                }
            },
        }
    });
}
// Инициализируем Swiper
if (document.querySelector('.reviews-slider')) {
    new Swiper('.reviews-slider', {
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // slidesPerView: 4.3,
        // Курсор перетаскивания
        grabCursor: true,
        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить только когда слайдер в пределах вьюпорта
            onlyInViewport: true,
        },
        // Скорость
        speed: 500,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            590: {
                slidesPerView: 1.8,
            },
            700: {
                slidesPerView: 2.2,
            },
            900: {
                slidesPerView: 2.8,
            },
            1150: {
                slidesPerView: 3.6,
            },
            1380: {
                slidesPerView: 4.3,
            }
        }
    });   
}
// Инициализируем Swiper
if (document.querySelector('.similar-products-slider')) {
    new Swiper('.similar-products-slider', {
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // Курсор перетаскивания
        grabCursor: true,
        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить только когда слайдер в пределах вьюпорта
            onlyInViewport: true,
        },
        // Скорость
        speed: 500,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1.6,
            },
            610: {
                slidesPerView: 2.1,
            },
            768: {
                slidesPerView: 2.6,
            },
            992: {
                slidesPerView: 3.5,
            },
            1250: {
                slidesPerView: 4.4,
            }
        }
    });  
}

if (document.querySelector('.orders-personal-slider'))  {
    // Инициализируем Swiper
    new Swiper('.orders-personal-slider', {
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // Курсор перетаскивания
        grabCursor: true,
        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить только когда слайдер в пределах вьюпорта
            onlyInViewport: true,
        },
        // Скорость
        speed: 500,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            460: {
                slidesPerView: 1.8,
            },
            580: {
                slidesPerView: 2.3,
            },
            680: {
                slidesPerView: 2.7,
            },
            850: {
                slidesPerView: 3.5,
            },
            1250: {
                slidesPerView: 2.6,
            }
        }
    });  
}