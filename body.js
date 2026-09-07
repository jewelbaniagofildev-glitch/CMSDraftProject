function go(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    window.scrollTo(0, 0);
}

// Light / dark mode toggle
function toggleDashTheme() {
    var layout = document.getElementById('dashLayout');
    var btn = document.getElementById('themeToggle');
    var iconSlot = document.getElementById('themeToggleIcon');
    var label = document.getElementById('themeToggleLabel');

    var isLight = layout.getAttribute('data-theme') === 'light';
    var next = isLight ? 'dark' : 'light';

    layout.setAttribute('data-theme', next);

    btn.setAttribute('aria-pressed', String(!isLight));

    iconSlot.innerHTML = next === 'light'
        ? '<svg><use href="#i-sun"/></svg>'
        : '<svg><use href="#i-moon"/></svg>';

    label.textContent = next === 'light'
        ? 'Light mode'
        : 'Dark mode';
}