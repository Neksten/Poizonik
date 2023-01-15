const favouritesItems = document.querySelectorAll('.favourites__item');

// При выборе размера
favouritesItems.forEach(item => {
    const sizes = item.querySelectorAll('.item-favourites__size');

    sizes.forEach(size => {
        size.addEventListener('click', () => {
            size.classList.toggle('_selected');
        })
    })
})

const popupFavouritesSizesItems = document.querySelectorAll('.popup-favourites-sizes__item');

popupFavouritesSizesItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('_selected');
    })
})