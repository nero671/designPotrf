const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    const navbarNav  = document.querySelector('.navbar-nav');
    const header = document.querySelector('header');

    menu.addEventListener('click', (e) => {
        navbarNav.classList.toggle('responsive');
        header.classList.toggle('active');
    })
}

const scrollTo = () => {
document.body.addEventListener('click', (e) => {
    if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        const target = e.target.closest('a[href^="#"]').getAttribute('href');
            document.body.querySelector(target).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
};

scrollTo();
toggleMenu();