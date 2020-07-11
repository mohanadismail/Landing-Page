/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Start Helper Functions
 * 
*/
function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= -20 &&
        rect.top <= 150 &&
        rect.left >= -20 &&
        rect.left <= 150
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const nav_bar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
for (section of sections) {
    nav_bar.innerHTML += "<li>" + section.getAttribute("data-nav") + "</li>";
}

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",  function() {
    for (section in sections) {
        if (isElementInViewport(sections[section])) {
            sections[section].classList.add("your-active-class");
            nav_els[section].classList.add("nav-active");
        }
        else {
            sections[section].classList.remove("your-active-class");
            nav_els[section].classList.remove("nav-active");
        }
    }
})

// Scroll to anchor ID using scrollTO event
const nav_els = document.querySelectorAll("#navbar__list li");
nav_bar.addEventListener("click", function(evt) {
    for (nav_el in nav_els) {
        if (evt.target == nav_els[nav_el]){
            sections[nav_el].scrollIntoView({behavior: "smooth"});
        }
    }
})

// Show "Scroll to Top" button when at bottom of the page
// Reference used : "https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom"
const scrollTop = document.getElementById("top_button");
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollTop.style.display = "inline";
    }
    else {
        scrollTop.style.display = "none";
    }
};

// Hide nav when no scrolling
window.addEventListener("scroll", function() {
    window.clearTimeout();
    nav_bar.style.display = "flex";
    setTimeout(function() {
        nav_bar.style.display = "none";
    }, 3500);
})

/**
 * End Main Functions */