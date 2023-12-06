var change=document.querySelector("h3")
var btn=document.querySelector("#buy")
var flag=0

btn.addEventListener("click",function(){
    if(flag==0){
    change.innerHTML="order successful"
    change.style.color="green"
    btn.innerHTML="order buy"
    flag=1

    }
    else{
        change.innerHTML="order cancel"
        change.style.color="red"
        btn.innerHTML="order cancel"
        flag=0

    }
})

