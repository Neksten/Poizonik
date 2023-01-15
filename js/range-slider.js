const priceSlider1 = document.getElementById('price-slider-1');
const priceSlider2 = document.getElementById('price-slider-2');

challengeSlider(priceSlider1, 1)
challengeSlider(priceSlider2, 2)

function challengeSlider(el, index) {
    if (el) {
        noUiSlider.create(el, {
            start: [5000, 499999],
            connect: true,
            step: 1,
            range: {
                'min': [5000],
                'max': [499999]
            }
        });
    
        const filterPriceInputMin = document.getElementById(`filter-price-input-min-${index}`);
        const filterPriceInputMax = document.getElementById(`filter-price-input-max-${index}`);
        const inputs = [filterPriceInputMin, filterPriceInputMax];
    
        el.noUiSlider.on('update', function(values, handle) {
            inputs[handle].value = Math.round(values[handle])
        });
    
        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
            el.noUiSlider.set(arr);
        };
    
        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
}