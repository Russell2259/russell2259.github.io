window.scrollTo(0, 0);

onerror = (e) => {
    alert(e);
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

var slide = 0;
const slideEl = document.querySelector('#slide');

function scrollSlide(direction) {
    if (direction === 'left') {
        slideEl.scrollTo(slideEl.scrollLeft -= document.querySelector(`.item[data-slideid="${slide}"]`).clientWidth, 0);
    } else if (direction === 'right') {
        slideEl.scrollTo(slideEl.scrollLeft += document.querySelector(`.item[data-slideid="${slide}"]`).clientWidth, 0);
    }
}

/*const tabmang = document.createElement('script');
tabmang.src = '/assets/js/tab.js';
document.body.appendChild(tabmang);*/