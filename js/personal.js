const itemFormPersonalMonth = document.querySelector('.item-form-personal__month');
const itemFormPersonalTitle = document.querySelector('.item-form-personal__title');
const itemFormPersonalList = document.querySelector('.item-form-personal__list');

if (itemFormPersonalMonth) {
    document.addEventListener('click', outsideEvtListener);
}

// месяц выпадающее меню
function outsideEvtListener(event) {
    if (event.target === itemFormPersonalMonth || itemFormPersonalMonth.contains(event.target)) {
        itemFormPersonalMonth.classList.toggle('_active');
        if (itemFormPersonalList.contains(event.target) && itemFormPersonalTitle.textContent !== event.target.textContent) {
            if (event.target === itemFormPersonalList) {
                return
            }
            itemFormPersonalTitle.textContent = event.target.textContent;
        }
        return;
    }
    itemFormPersonalMonth.classList.remove('_active');
}

const personalAddresses = document.querySelector('.personal__addresses');
const formPopupAddAddressInputs = document.querySelectorAll('.form-popup-add-address__input');
const formPopupAddAddressTextarea = document.querySelector('.form-popup-add-address__textarea');
const formPopupAddAddressButton = document.querySelector('.form-popup-add-address__button');

// Слежка за инпутами
formPopupAddAddressInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.border = '1px solid #E5C798';
    })
    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            input.style.border = '1px solid #ADD7B9';
        }
    })
    input.addEventListener('blur', () => {
        if (input.value.length === 0 && input.classList.contains('obligatory')) {
           input.style.border = '1px solid red';
        } else if (input.value.length > 0) {
            input.style.border = '1px solid #ADD7B9';
        }
        else {
           input.style.border = '1px solid #e4e4e4';
        }
    })
})

// сохранение адреса
formPopupAddAddressButton.addEventListener('click', (event) => {
    event.preventDefault();

    let error = 0;
    // слежка за инпутами
    for (let i = 0; i < formPopupAddAddressInputs.length; i ++) {
        if (formPopupAddAddressInputs[i].value.length === 0 && formPopupAddAddressInputs[i].classList.contains('obligatory')) {
            formPopupAddAddressInputs[i].style.border = '1px solid red';
            error = 1;
        } else if (formPopupAddAddressInputs[i].value.length > 0) {
            formPopupAddAddressInputs[i].style.border = '1px solid #ADD7B9';
        }
        else {
            formPopupAddAddressInputs[i].style.border = '1px solid #e4e4e4';
        }
    }

    if (error) {
        return
    }
    // тело адреса 
    const [city, street, index, house, body, appartment] = formPopupAddAddressInputs
    const newElement = document.createElement('div');
    newElement.classList.add('personal__address', 'address-personal')
    newElement.innerHTML = 
        `<div class="address-personal__address">
            <div class="address-personal__basic">Россия, ${city.value}</div>
            <div class="address-personal__info">${index.value}, ${street.value}, ${house.value}, ${body.value.length > 0 ? body.value + ',' : ''} ${appartment.value}</div>
        </div>
        <div class="address-personal__remove">Удалить</div>`
    personalAddresses.append(newElement)

    
    addressDelete();
    // очищаю все инпуты после сохранения
    formPopupAddAddressInputs.forEach(input => {
        input.value = '';
        input.style.border = '1px solid #e4e4e4';
    })
})


// Удалить адрес
function addressDelete() {
    const personalAddress = document.querySelectorAll('.personal__address');

    if (personalAddress) {
        personalAddress.forEach(address => {
            let addressRemove = address.querySelector('.address-personal__remove')
            addressRemove.addEventListener('click', () => {
                address.remove();
            })
        })
    }
}

addressDelete();

// link scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = anchor.getAttribute("href")
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Количество заказов
const ordersPersonalTitle = document.querySelector('.orders-personal__title');
const ordersPersonalSliderSlides = document.querySelectorAll('.orders-personal-slider__slide');

ordersPersonalTitle.textContent = `Заказы ${ordersPersonalSliderSlides.length}`