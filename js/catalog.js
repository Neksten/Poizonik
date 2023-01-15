// сделать активными чекбоксы
const filterCatalogItems = document.querySelectorAll('.filter-catalog__item')

filterCatalogItems.forEach(item => {
    const filterCatalogCheckbox = item.querySelector('.filter-catalog__checkbox');

    item.addEventListener('click', () => {
        // а сортировки только один активный чекбокс
        if (item.classList.contains('filter-sorting-catalog__item')) {
            const filterSortingCatalogItems = document.querySelectorAll('.filter-sorting-catalog__item');

            filterSortingCatalogItems.forEach(el => {
                const filterCatalogCheckbox = el.querySelector('.filter-catalog__checkbox');
                if (filterCatalogCheckbox.classList.contains('_active')) {
                    filterCatalogCheckbox.classList.remove('_active')
                }
            })
        }

        filterCatalogCheckbox.classList.toggle('_active');
    })
})



const filters = document.querySelectorAll('.filter');

for (let i = 0; i < filters.length; i++) {
    const filterButton = filters[i].querySelector('.filter-button');
    const index = i;

    filterButton.addEventListener('click', () => {
        // проверить есть ли открытые фильтры, если нет, то закрыть
        for (let i = 0; i < filters.length; i++) {
            if (index != i && filters[i].classList.contains('_active')) {
                filters[i].classList.remove('_active')
            }
        }
        
        filters[index].classList.toggle('_active');
    })
}

// открыть меню фильтра
const filterCatalogAll = document.querySelector('.filter-catalog-all');
const filterCatalogAllBody = document.querySelector('.filter-catalog-all__body');
const filterCatalogAllButton = document.querySelector('.filter-catalog-all__button');

filterCatalogAllBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-catalog-all__close')) {
        filterCatalogAll.classList.remove('_active');
        filterCatalogAllFilters.forEach(filter => {
            filter.classList.remove('_active');
        })
    }
})

document.addEventListener('click', (event) => {
    if (event.target === filterCatalogAllBody || filterCatalogAllBody.contains(event.target) || event.target == filterCatalogAllButton) {
        return
    } else {
        filterCatalogAll.classList.remove('_active');
        filterCatalogAllFilters.forEach(filter => {
            filter.classList.remove('_active');
        })
    }
});

// закрыть подтфильтр при клике вне его
document.addEventListener('click', outsideEvtListener);

function outsideEvtListener(event) {
    let flag = 0;
    filters.forEach(filter => {
        // Если клик по фильтру либо его элементу
        if (event.target === filter || filter.contains(event.target)) {
            flag = 1;  
        }
    })
    if (flag) {
        return
    } else {
        filters.forEach(filter => {
            filter.classList.remove('_active')
        })
    }
}

const filterCatalogAllFilters = document.querySelectorAll('.filter-catalog-all-filter');
const filterCatalogAllFilterButtons = document.querySelectorAll('.filter-catalog-all-filter__button');

filterCatalogAllFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.closest('.filter-catalog-all-filter');

        const filterCatalogAllFiltersActive = document.querySelectorAll('.filter-catalog-all-filter._active');
        
        if (filterCatalogAllFiltersActive.length > 0) {
            console.log(filterCatalogAllFiltersActive)
            filterCatalogAllFiltersActive.forEach(el => {
                if (el == filter) {
                    return
                }
                el.classList.remove('_active')
            })
        }

        filter.classList.toggle('_active')
    })
})

const filtersCatalogAllFilterSize = document.querySelectorAll('.filter-catalog-all-filter__size');

filtersCatalogAllFilterSize.forEach(size => {
    size.addEventListener('click', () => {
        size.classList.toggle('_selected')
    })
})

const filtersCatalogAllFilterbrand = document.querySelectorAll('.filter-catalog-all-filter__brand');

filtersCatalogAllFilterbrand.forEach(brand => {
    brand.addEventListener('click', () => {
        brand.classList.toggle('_selected')
    })
})