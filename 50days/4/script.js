var inputObj=document.querySelector("input");
var buttonObj=document.querySelector(".search");
buttonObj.onclick=()=>{
    if(inputObj.className===""){
        inputObj.className="hide";
    }
    else 
        inputObj.className="";
}