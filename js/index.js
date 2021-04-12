function dropdown() {
    document.getElementById('menu').classList.toggle('show-dropdown');
}

function lightsout() {
    var styles = document.getElementById('stylesheet-dark');
    var themeBtn = document.getElementById('theme-btn');

    if (themeBtn.classList.contains('fa-moon')) {
        themeBtn.classList.add('fa-sun');
        themeBtn.classList.remove('fa-moon');
    } else {
        themeBtn.classList.add('fa-moon');
        themeBtn.classList.remove('fa-sun');
    }

    if (styles.href.match(/\/css\/dark.css/)) {
        styles.href = '#';
    } else {
        styles.href = '/css/dark.css';
    }
}
