function softShadow(option) {
    let images = document.querySelectorAll('.softShadow');
    if (option.shadow_type === 'hard') {
        option.shadow_type = '20px'
    }
    else {
        option.shadow_type = '0px';
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 15px 15px ${option.shadow_type} rgba(5,5,5,0.27)`;
        if (option.padding) {
            image.style.padding = '1.5em';
        }
        image.style.margin = '1.5em';
    })
}

module.exports.softShadow = softShadow;