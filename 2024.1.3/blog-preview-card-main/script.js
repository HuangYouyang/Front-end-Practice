const clickObj = document.querySelector("h1");
const containerObj = document.querySelector(".container");

console.log(containerObj);

clickObj.addEventListener('mousedown',()=>{
    clickObj.style.color="hsl(47, 88%, 63%)";
    containerObj.style.boxShadow="13px 13px black";
})

clickObj.addEventListener('mouseup',()=>{
    clickObj.style.color="black";
    containerObj.style.boxShadow="10px 10px black";
})