// Mobile Navigation

var btnBurger = document.querySelector('.header__toggle');
var menu = document.querySelector('.nav');
var navLinks = document.querySelectorAll('.nav__link');
var t;
(function () {

    if (btnBurger) {
        btnBurger.addEventListener('click', function (event) {
            event.preventDefault();
            btnBurger.classList.toggle('open');
            menu.classList.toggle('open');
        });
    }
    if (navLinks && navLinks.length>0){
        navLinks.forEach(function (link) {
            link.addEventListener('click', closeMobileNav)
        })
    }
})();



function closeMobileNav() {
    if (btnBurger && btnBurger.classList.contains('open')) {
        btnBurger.classList.remove('open');
    }
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    }
}

//Scroll Up

function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
}

//Open Story
var arrows = document.querySelectorAll("[data-toggle]");
console.log(arrows);
arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function (event) {
            event.preventDefault();
            var story = arrow.parentNode.parentNode;
            story.classList.toggle('story--open');
        });
});

//Open chapter
var ticks = document.querySelectorAll('.arrow-bottom-transparent');
console.log(ticks);
ticks.forEach(function () {
    tick.addEventListener('click', function (event) {
        event.preventDefault();
        var story = tick.parentNode.parentNode;
        story.classList.toggle('chapter--open');
    });
})