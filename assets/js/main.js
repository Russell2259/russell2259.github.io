const svgs = document.querySelectorAll('generated-svg');

for (let i = 0; i < svgs.length; i++) {
    if (svgs[i].dataset.svg) {
        svgs[i].style = `data:image/svg+xml;utf8,${svgs[i].dataset.svg}`;
    }
}