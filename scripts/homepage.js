const navLinks = document.querySelector('.nav-links');
document.getElementById('menu').addEventListener('click', function() {
    navLinks.classList.toggle('top-[9%]');
    this.classList.toggle('bx-menu');
    this.classList.toggle('bx-x');
    
});
