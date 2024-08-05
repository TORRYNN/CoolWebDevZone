let lastScrollTop = 0;

// Selecting the navbar
const navbar = document.querySelector(".header");

// Using Event Listener to listen for scroll events.
// This will trigger each time when user scrolls.
window.addEventListener("scroll", function() {
    // window.scrollY returns the number of pixels user scrolls.
    // Or is scrollY is not available in older browsers scrolltop will be used.
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.style.top = "-80px"; // Adjust based on navbar height
    } else {
        // Scroll up
        navbar.style.top = "0";
    }
    // Here we are using Ternary Operator

    // If currentScroll is less than or equal to 0 so lastScrollTop will be 0 
    // else
    // It will be currentScroll.

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure scrollTop doesn't go negative
});
