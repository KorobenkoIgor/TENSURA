document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка для ссылок в навигации
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Учитываем высоту фиксированного хедера
                    behavior: 'smooth'
                });
            }
        });
    });

    // Плавная прокрутка для кнопки "Узнать больше"
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - 80, // Учитываем высоту фиксированного хедера
                behavior: 'smooth'
            });
        }
    });
});
