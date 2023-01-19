const product__sizes = document.querySelectorAll('.product__size');

product__sizes.forEach(size => {
    size.addEventListener('click', () => {
        size.classList.toggle('_selected')
    })
})