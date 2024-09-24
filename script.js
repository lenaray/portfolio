function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    menu.classList.toggle("icon");
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function toggleProjectDetails(tile) {
    const details = tile.querySelector('.project-details')
    const allDetails = document.querySelector('.project-details')
    allDetails.forEach(detail => {
        if (detail !== details) {
            detail.style.display = 'none';
        }
    });
    details.style.display = details.stytle.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function changeNavOnScroll() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeNavOnScroll);
});

window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const sectionPosition = contactSection.getBoundingClientRect();
    
    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
        contactSection.classList.add('scrolled');
    } else {
        contactSection.classList.remove('scrolled');
    }
});