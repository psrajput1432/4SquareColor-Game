//html random number/content between 0 to 100 (excluded) in first square and red color when mouse enters and white color and html contenyt "1" when mouse leaves
let w = document.querySelector("#first");
w.addEventListener("mouseenter",function(){
let r =Math.floor(Math.random()*100);
w.innerHTML=`<h1>${r}</h1>`;
w.style.backgroundColor = "red"; 
})
w.addEventListener("mouseleave",function(){
    w.style.backgroundColor="white";
    w.innerHTML="<h1>1</h1>";
})

//Red, green, blue color of second square when mouse enters and white when leaves
let x = document.querySelector("#second");
let currentColor = "red"; 
x.addEventListener("mouseenter",function(){
    if (currentColor== "red") {
        x.style.backgroundColor="green";
        currentColor="green";
    } else if (currentColor== "green") {
        x.style.backgroundColor="blue";
        currentColor="blue";
    } else if (currentColor== "blue") {
        x.style.backgroundColor="red";
        currentColor="red";
    }
    
})
x.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
})


//Random color of third square when mouse enter and white when leaves
let y = document.querySelector("#third");
y.addEventListener("mouseenter",function(){
let r =Math.floor(Math.random()*256);
let g =Math.floor(Math.random()*256);
let b =Math.floor(Math.random()*256);
y.style.backgroundColor = `rgb(${r},${g},${b})`; 
})
y.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
})

let z = document.querySelector("#fourth");
z.addEventListener("click",function(){
    let r =Math.floor(Math.random()*256);
    let g =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);  
w.style.backgroundColor = `rgb(224,${g},${b})`; 
x.style.backgroundColor = `rgb(${r},229,${b})`; 
y.style.backgroundColor = `rgb(${r},${g},231)`; 
})

z.addEventListener("mouseleave",function(){
    w.style.backgroundColor="white";
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
})

