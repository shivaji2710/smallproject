var card=document.querySelector("#card")
var logo=document.querySelector("i")

card.addEventListener("dblclick",function(){
    logo.style.transform="translate(-50%,-50%)scale(1)"
    logo.style.opacity="0.7"
    setTimeout(() => {
    logo.style.opacity="0"   
    }, 1000);
    setTimeout(() => {
        logo.style.transform="translate(-50%,-50%)scale(0)"   
        }, 2000);
})