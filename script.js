function toggleMenu() {
    var menu = document.getElementById("navbar-menu");
    menu.classList.toggle("show-menu");
    // Toggle animation for content when menu is shown
    var contentSections = document.querySelectorAll('.section');
    contentSections.forEach(function(section) {
        section.classList.toggle('show-content');
    });
}

function closeNavbar() {
    var menu = document.getElementById("navbar-menu");
    // Check if the menu is open
    if (menu.classList.contains('show-menu')) {
        // Close the menu
        toggleMenu();
    }
}

// Add animation for navbar links when clicked
var menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        link.classList.add('animated', 'bounce');
        setTimeout(function() {
            link.classList.remove('animated', 'bounce');
        }, 1000); // Change this value according to your animation duration
    });
});

var navbar = document.getElementById("navbar");
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px"; // Hide the navbar
    }
    prevScrollPos = currentScrollPos;
}
