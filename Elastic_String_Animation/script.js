// Path which is going to be updated when we hover over the string
var path='M 10 100 Q 500 100  990 100';
// Path which is going to be used when mouse leaves the screen.
var finalpath="M 10 100 Q 500 100  990 100" 

// Querryselector is used to select the first element within the document that matches a specified CSS selector or group of selectors.
var string=document.querySelector('#string');


// Creating an event listener for String div

// dets is an event object that contains the information about the mousemove event. 
string.addEventListener("mousemove", function (dets) {
    path= `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        // attr is used to get or set the value of an attribute on the selected element.
        attr:{d:path},
        durations:1.5,
        ease:"power3.out",
    })
})

// This method is used for  taking the string to its intial position when mouse leave.
string.addEventListener("mouseleave", function(){
gsap.to("svg path",{
        attr:{d:finalpath},
        duration:2,
        ease: "elastic.out"
        
    })
})