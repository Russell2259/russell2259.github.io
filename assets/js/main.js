window.scrollTo(0, 0);

widnow.onerror = (e) => {
    alert(e);
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

var slide = 0;

document.querySelector('[data-arrow="right"]').addEventListener('click', (event) => {     slide += 1;     SlideJs.goTo(slide); });  document.querySelector('[data-arrow="left"]').addEventListener('click', (event) => {     slide -=1;     SlideJs.goTo(slide); })

/*const tabmang = document.createElement('script');
tabmang.src = '/assets/js/tab.js';
document.body.appendChild(tabmang);*/