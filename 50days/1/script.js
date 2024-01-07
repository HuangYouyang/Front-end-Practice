const boxObj = document.querySelectorAll('.box');
boxObj.forEach(box=>{
    box.addEventListener('click',()=>{
        removeActiveClasses();
        box.classList.add('active');
    })
})
function removeActiveClasses() {
    boxObj.forEach(box => {
        box.classList.remove('active')
    })
}