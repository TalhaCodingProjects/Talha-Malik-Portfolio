document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const loaderWrapper = document.getElementById('loader-wrapper');

    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 5000); 

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('toggle');
    });

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});

