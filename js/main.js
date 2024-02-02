const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function createElement(tag = 'div', text = '', classList = [], attrs = {}) {
    let element = document.createElement(tag)
    element.classList.add(...classList)
    element.textContent = text
    for (const prop in attrs) {
        element[prop] = attrs[prop]
    }
    return element
}

function createItem(src) {
    const item = createElement('div', '', ['swiper-slide'])
    const img = createElement('img', '', ['swiper-img'], {'src': `img/${src}.jpeg`})
    item.append(img)
    console.log(`img/${src}`);
    return item
}

const list = document.getElementById('swip-cont')
for (let i = 1; i <= 54; i++) {
    list.append(createItem(i))
}