const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

document
.querySelectorAll(
'.about, .interests, .projects, .publications, .achievements, .experience-section, .contact'
)
.forEach(section => {

    section.classList.add('hidden');

    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting) {

                entry.target.classList.add('show');
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        '.about, .interests, .projects, .publications, .achievements, .experience-section, .contact'
    ).forEach(section => {

        section.classList.add('hidden');

        observer.observe(section);
    });



    // Theme Toggle

    const themeToggle = document.getElementById('theme-toggle');

    if(themeToggle){

        const savedTheme = localStorage.getItem('theme');

        if(savedTheme === 'dark'){

            document.body.classList.add('dark');

            themeToggle.textContent = '☀️';
        }

        themeToggle.addEventListener('click', function(){

            document.body.classList.toggle('dark');

            if(document.body.classList.contains('dark')){

                this.textContent = '☀️';

                localStorage.setItem('theme', 'dark');

            } else {

                this.textContent = '🌙';

                localStorage.setItem('theme', 'light');
            }
        });
    }



    // Hamburger

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks){

        hamburger.addEventListener('click', function(){

            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {

            link.addEventListener('click', function(){

                navLinks.classList.remove('active');
            });
        });
    }

});