// rotation
var menuButton=document.querySelector(".menu");
var closeButtom=document.querySelector(".close");
var box=document.querySelector(".box");
menuButton.onclick = ()=>{
    box.className="box show-nav";
}
closeButtom.onclick = ()=>{
    box.className="";
}