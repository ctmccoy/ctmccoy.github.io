// js for dark mode
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const headerText = document.querySelector('.header-text');
    const projectCards = document.querySelectorAll('.project-card');
    const footerSocialLinks = document.querySelectorAll('.footer-social a');

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark');
        sidebar.classList.toggle('dark');
        headerText.classList.toggle('dark');
        projectCards.forEach(card => card.classList.toggle('dark'));
        footerSocialLinks.forEach(link => link.classList.toggle('dark'));
    });
});
