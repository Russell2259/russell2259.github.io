window.scrollTo(0, 0);

window.onerror = (e) => {
    console.log(e);
}

if (new Date().getDate() === 12 && new Date().getMonth()+1 === 4) {
    const banner = document.createElement('div');
    banner.classList = 'banner birthday';
    banner.innerHTML = '<h1>Happy Birthday Russell2259!</h1>';
    document.body.insertBefore(banner, document.body.firstChild);
}