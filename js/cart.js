// saidbar количество товара
const infoSaidbarCartQuantity = document.querySelector('.info-saidbar-cart__quantity');
const cartProducts = document.querySelectorAll('.cart__product')
const infoSaidbarCartText = document.querySelector('.info-saidbar-cart__text');

if (infoSaidbarCartQuantity) {
    let quantity = cartProducts.length;
    infoSaidbarCartQuantity.textContent =  quantity;
    infoSaidbarCartText.textContent = `${declOfNum(quantity, ['товар', 'товара', 'товаров'])} на сумму`
}

// Склонение слова
function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

// saidbar цена
let countPriceSaidbar = 0;
const infoSaidbarCartPrice = document.querySelector('.info-saidbar-cart__price');
const productsCartPrice = document.querySelectorAll('.product-cart__price');

if (productsCartPrice) {
    productsCartPrice.forEach(product => {
        let price = Number(product.querySelector('i').textContent.replace('руб.', '').replace(/ /g,''));
        countPriceSaidbar += price;
    })
}

if (infoSaidbarCartPrice) {
    infoSaidbarCartPrice.textContent = countPriceSaidbar.toLocaleString() + ' руб.';
}

// УДАЛИТЬ КОРЗИНА
const productCartCloses = document.querySelectorAll('.product-cart__close');

if (productCartCloses) {
    productCartCloses.forEach(close => {
        close.addEventListener('click', () => {
            let product = close.closest('.cart__product')
            product.parentNode.removeChild(product);
        })
    })
}

// ПРОМОКОД
const promocodeSaidbarCartButton = document.querySelector('.promocode-saidbar-cart__button');

if (promocodeSaidbarCartButton) {
    promocodeSaidbarCartButton.addEventListener('click', function(event) {
        event.preventDefault();
    })
}
