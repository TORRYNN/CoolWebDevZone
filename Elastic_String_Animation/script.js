// Original path when the string is at rest (centered)
var path = 'M 10 25 Q 500 10 990 25';
var finalpath = "M 10 25 Q 500 25 990 25";

// Select the string element
var string = document.querySelector('#string');

// Event listener for when the mouse moves over the string
string.addEventListener("mousemove", function(dets) {
    // Adjusting the y-coordinate to keep it centered
    // getBoundingClientRect().top tells us how far the top of an element is from the top edge of the viewport.
    path = `M 10 25 Q ${dets.x} ${dets.y - string.getBoundingClientRect().top} 990 25`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 1.5,
        ease: "power3.out",
    });
});

// Event listener for when the mouse leaves the string
string.addEventListener("mouseleave", function() {
    gsap.to("svg path", {
        attr: { d: finalpath },
        duration: 2.5,
        ease: "elastic.out"
    });
});
