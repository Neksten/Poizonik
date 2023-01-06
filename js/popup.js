// По клику на ссылку открыть модалку
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

popupLinks.forEach(popupLink => {
    popupLink.addEventListener('click', function(event) {
        // Убираю #, пишу чистое имя
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        event.preventDefault();
    })
})

// Закрыть на крестик например
const popupCloseIcon = document.querySelectorAll('.close-popup');
popupCloseIcon.forEach(el => {
    el.addEventListener('click', function(event) {
        popupClose(el.closest('.popup'));
        event.preventDefault();
    })
})

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            //bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function(event) {
            if (!event.target.closest('.popup__content')) {
                popupClose(event.target.closest('.popup'));
            }
        })
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            //bodyUnLock();
        }
    }
}
// делаем красивой убирание скроолла, чтобы контент оставался на месте
// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             //el.style.paddingRight = lockPaddingValue;
//         }
//     }
//     //body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function() {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnLock() {
//     setTimeout(function() {
//         if (lockPadding.length > 0) {
//             for (let index = 0; index.lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 //el.style.paddingRight = '0px';
//             }
//         }
//         //body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     })

//     unlock = false;
//     setTimeout(function() {
//         unlock = true;
//     }, timeout);
// }
//====================
// document.addEventListener('keydown', function(event) {
//     if (event.which === 27) {
//         const popupActive = document.querySelector('.popop.open');
//         popupClose(popupActive);
//     }
// })

// (function () {
//     // Проверяем поддержку 
//     if (!Element.prototype.closest) {
//         // руфлизуем
//         Element.prototype.closest = function(css) {
//             var node = this;
//             while (node) {
//                 if (node.matches(css)) return node;
//                 else node = node.parentElement;
//             }
//             return null;
//         }
//     }
// })();
// (function () {
//     // проверяем поддержку
//     if (!Element.prototype.matches) {
//         // определяем свойство
//         Element.prototype.matches = Element.prototype.matchesSelector ||
//             Element.prototype.webkitMatchesSelector ||
//             Element.prototype.mozMatchesSelector ||
//             Element.prototype.msMatchesSelector;
//     }
// })();