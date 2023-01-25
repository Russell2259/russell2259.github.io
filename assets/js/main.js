if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

const svg = document.querySelectorAll('path')[1];
svg.fill = getComputedStyle(document.documentElement).getPropertyValue('--wave-color');
alert(svg.fill);