window.scrollTo(0, 0);

window.onerror = (e) => {
    alert(e);
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

const tabmang = document.createElement('script');
tabmang.src = '/assets/js/tab.js';
document.body.appendChild(tabmang);

//if (new Date().getDate() === 12 && new Date().getMonth()+1 === 4) {
    const banner = document.createElement('div');
    banner.classList = 'banner birthday';
    banner.innerHTML = '<h1>Yay!</h1>';
    document.body.insertBefore(banner, document.body.firstChild);
//}

var firebug=document.createElement('script');firebug.setAttribute('src','https://luphoria.com/fbl/fbl/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);