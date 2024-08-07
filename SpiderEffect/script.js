// Declaring the elements which we are going to use to manipulate.

let banner=document.querySelector('.banner');
let canvas=document.getElementById('dotscanvas');

canvas.width=canvas.offsetWidth;
canvas.height=canvas.offsetHeight;

let ctx=canvas.getContext('2d');

let dots=[];

// Color Array for the circles

let arrayColors=['red','green','blue','black','white','purple','orange'];

// Loop for generating circles.
for(let index=0;index<100;index++){
dots.push({
    // Generate random points on the canvas
    // Position of dot on X-axis 
    x: Math.floor(Math.random() * canvas.width),
    // Position of dot on y-axis
    y: Math.floor(Math.random() * canvas.height),
    // It will generate random  circle of sixe 3px to 5px
    size:Math.random()*2+3,
    // color to give color to the circle , here we are using an arraycolor which has the color info.
    color:arrayColors[Math.floor(Math.random()*7)]
});
}

// Function to draw circles
const drawDots= () => {
    dots.forEach(dot=>{

        ctx.fillStyle=dot.color;
        // Starts a new path or resets the current path.
        ctx.beginPath();
        // Defines a circular arc path.
        ctx.arc(dot.x,dot.y,dot.size,0,Math.PI*2);
        // Fills the current path with the current fill color.
        ctx.fill();

    })
}

drawDots();

banner.addEventListener('mousemove' ,(event)=>{
    // ctx.clearRect clears the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawDots();
    // Calculate the mouse position relative to the canvas.

    let mouse={
        x:event.pageX - banner.getBoundingClientRect().left,
        y:event.pageY - banner.getBoundingClientRect().top
    }
    // For each dot calculate the mouse position relative to the canvas.
    dots.forEach(dot=>{
        // Using distance formula to calculate the distance between the dot and mouse.
        let distance=Math.sqrt((mouse.x-dot.x) **2 + (mouse.y-dot.y) **2);

        // If the distance is less than 300 we will  draw a line from the dot to the mouse position.
        if(distance<300){
            // Set the color for the stroke of the line that will be drawn.
            ctx.strokeStyle=dot.color;
            // Sets the width of the line  to be drawn.
            ctx.linewidth=1;
            // Starts a new path or resets the current path.
            ctx.beginPath();
            // Sets the starting point of the path to the coordinates, which is the position of the current dot. The line drawing will starts from this dot.
            ctx.moveTo(dot.x,dot.y);
            // Draw a line from current path's position to the coordinates which represents the current mouse position. This means the line will end at the mouse cursor's location.
            ctx.lineTo(mouse.x,mouse.y);
            // It actually draws the path on the canvas.
            ctx.stroke();
        }
    })
})

// Mouse out event , this event is triggered when the mouse leaves banner area ,it clears the canvas and redraws dots.

banner.addEventListener('mouseout',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawDots();
})
