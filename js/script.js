const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon-menu');
const headerGender = document.querySelector('.header__gender');
const menuHeroItem = document.querySelector('.menu__hero-item');
const blockOpacity = document.querySelector('.block-opacity');
const headerLkMenuVertical = document.querySelector('.header__lk-menu-vertical');
const menuLinks = document.querySelectorAll('.menu__link');
const formDiscountCheckbox = document.querySelector('.form-discount__checkbox')

const screenWidth = window.screen.width
const screenHeight = window.screen.height

// Burger
iconMenu.addEventListener('click', () => {
    menu.classList.toggle('_active');
    headerGender.classList.toggle('_active');
    menuHeroItem.classList.toggle('_active');
    blockOpacity.classList.toggle('_active');
    headerLkMenuVertical.classList.toggle('_active');
    // Смена иконки
    // Если бургер
    if (!iconMenu.classList.contains('_active')) {
        iconMenu.classList.add('_active');
        iconMenu.innerHTML = `<img src="./img/icons/cross.svg" alt="" oncontextmenu="return false">`;
        
        // Вернуть к исходному состоянию
        const menuLink = document.querySelector('.menu__link._active')
        // Если нажали бургер, а там был открытый фильтр
        if (!!menuLink) {
            // Возвращаю скрытые фильтры, убираю класс у активных ссылок, закрываю все открытые подменю
            menuLinks.forEach(menuLink => {
                const subMenu = menuLink.parentElement.querySelector('.menu__list-submenu');
                menuLink.classList.remove('_hide')
                menuLink.classList.remove('_active')
                if (!!subMenu) {
                    subMenu.classList.remove('_active')
                }
            })    
        }
    } else {
        // Если крестик
        iconMenu.classList.remove('_active');
        iconMenu.innerHTML = `<img src="./img/icons/burger.svg" alt="" oncontextmenu="return false">`;
        closeMenu()
    }
})

// Menu burger
menuLinks.forEach(menuLink => {
    const subMenu = menuLink.parentElement.querySelector('.menu__list-submenu');
    menuLink.addEventListener('click', () => {
        menuLink.classList.toggle('_active');
        // если у фильтра есть подменю с фильтрами то при клике показывать его
        if (!!subMenu) {
            subMenu.classList.toggle('_active')
        }
        // Если сслылка активная
        if (!!menuLink.classList.contains('_active')) {
            // Скрываю лишние фильтры
            menuLinks.forEach(menuLink => {
                if (!menuLink.classList.contains('_active')) {
                    menuLink.classList.add('_hide')
                }
            })
        } else {
            // Показываю лишние фильтры
            menuLinks.forEach(menuLink => {
                menuLink.classList.remove('_hide')
            })
        }
    })
})
// Menu при наведение
menu.addEventListener('mouseover', (event) => {
    const target = event.target;
    // Если пункт меню, то сделать активным подменю
    if (target.classList.contains('menu__link')) {
        const subMenu = target.parentElement.querySelector('.menu__list-submenu');
        if (!!subMenu) {
            closeMenu();
            subMenu.classList.add('_active-over');
        }
    }
})
document.addEventListener('mouseover', (event) => {
    const target = event.target;
    // Если не категория, не подменю, не ссылка меню, то закрыть подменю
    if (!target.classList.contains('menu__link') && !target.classList.contains('menu__list-submenu') && !target.classList.contains('submenu__link')) {
        closeMenu()
    }
})
// закрыть все подменю если мышку увели
function closeMenu() {
    const subMenuList = document.querySelectorAll('.menu__list-submenu');
    if (subMenuList.length > 0) {
        subMenuList.forEach(subMenu => {
            subMenu.classList.remove('_active-over');
        })
    }
}

// Адаптивная картинка section "hero"
if (screenWidth <= 992) {
    document.querySelector('.best__image').src = './img/background/best-small.jpg'
} 
if (screenWidth > 2300) {
    document.querySelector('.best__image').src = './img/background/best-big.jpg'
}

// Поставить agree в форму для скидки
formDiscountCheckbox.addEventListener('click', () => formDiscountCheckbox.classList.toggle('_active'))