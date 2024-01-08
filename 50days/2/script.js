const prevButton=document.querySelector(".prev");
const nextButton=document.querySelector(".next");
const circleList=document.querySelectorAll(".circle");
const progressVis=document.querySelector(".progress-vis");
nextButton.addEventListener("click",()=>{
    for(var i=0;i<circleList.length;i++){
        prevButton.disabled=false;
        if(i==circleList.length-1) nextButton.disabled=true;
        if(circleList[i].className!="circle active"){
            circleList[i].className="circle active";
            progressVis.style.width=i*33.3+"%";
            break;
        }
    }
})
prevButton.addEventListener("click",()=>{
    for(var i=circleList.length-1;i>=1;i--){
        nextButton.disabled=false;
        if(i==1) prevButton.disabled=true;
        if(circleList[i].className==="circle active"){
            circleList[i].className="circle";
            progressVis.style.width=(i-1)*33.3+"%";
            break;
        }
    }
})