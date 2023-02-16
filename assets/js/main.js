const tabmang = document.createElement('script');
tabmang.src = '/assets/js/tab.js';
document.head.appendChild(tabmang);

window.scrollTo(0, 0);

window.onerror = (e) => {
    alert(e);
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}