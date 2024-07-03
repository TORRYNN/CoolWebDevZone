

let inputbox=document.getElementById("input-box");


let resultBox=document.getElementById("colorbox");

let changecolor=()=>{
    let input= inputbox.value;
    resultBox.style.backgroundColor=input;
    let sec=input;
    
};

inputbox.addEventListener("input",changecolor); 
window.addEventListener("load",changecolor); 