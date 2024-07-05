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
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    // It will generate circle of sixe 3px to 5px
    size:Math.random()*3+5,
    // color to give color to the circle , here we are using an arraycolor which has the color info.
    color:arrayColors[Math.floor(Math.random()*7)]
});
}

// Function to draw circles
const drawDots= () => {
    dots.forEach(dot=>{

        ctx.fillStyle=dot.color;
        ctx.beginPath();
        ctx.arc(dot.x,dot.y,dot.size,0,Math.PI*2);
        ctx.fill();


    })
}

drawDots();

banner.addEventListener('mousemove' ,(event)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawDots();
    let mouse={
        x:event.pageX - banner.getBoundingClientRect().left,
        y:event.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach(dot=>{
        let distance=Math.sqrt((mouse.x-dot.x) **2 + (mouse.y-dot.y) **2);

        if(distance<300){
            ctx.strokeStyle=dot.color;
            ctx.linewidth=1;
            ctx.beginPath();
            ctx.moveTo(dot.x,dot.y);
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
    })
})

banner.addEventListener('mouseout',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawDots();
})
