document.getElementById("inputBox").addEventListener("focus",function(){
        document.querySelector(".search").style.backgroundColor = "white";
});

document.getElementById("inputBox").addEventListener("focusout",function(){
    document.querySelector(".search").style.backgroundColor = "transparent";
});