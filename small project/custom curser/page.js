var h1=document.querySelector("#main")
var curser=document.querySelector("#curser")
h1.addEventListener("mousemove",function(data){
    curser.style.left=data.x+"px"
    curser.style.top=data.y+"px"
})