// Mobile Navigation

var body = document.querySelector("html");
var btnBurger = document.querySelector("[data-toggle='main']");

(function () {
    if (btnBurger) {
        btnBurger.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(btnBurger);
            btnBurger.classList.toggle('open');
            body.classList.toggle('menu--open');

            var wrapper = btnBurger.parentNode;
            wrapper.classList.toggle('wrapper--open');
        });
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


//Open Story
var collapses = document.querySelectorAll("[data-toggle='collapse']");
collapses.forEach(function (collapse) {
        collapse.addEventListener('click', function (event) {
            event.preventDefault();
            var story = collapse.parentNode.parentNode;
            story.classList.toggle('story--open');
        });
});


var dropdowns = document.querySelectorAll("[data-toggle='dropdown']");
dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
        event.preventDefault();
        var story = dropdown.parentNode;
        story.classList.toggle('dropdown--open');
    });
});