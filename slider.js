const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const dragons = [document.querySelector("#dragon1"), document.querySelector("#dragon2"), document.querySelector("#dragon3")];
const indi1=document.querySelector("#indi1");
const indi2=document.querySelector("#indi2");
const indi3=document.querySelector("#indi3");
const cutter1=document.querySelector("#cutter1");
const cutter2=document.querySelector("#cutter2");
let currentIndex = 0;
forward.addEventListener("click", function() {
    if(currentIndex < dragons.length - 1){
    dragons[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1);
    dragons[currentIndex].style.display = "block";
    updatecolorforward();
    updatecolorbackward();
    ballcolor();
    }
});

backward.addEventListener("click", function() {
    if(currentIndex > 0){
    dragons[currentIndex].style.display = "none";
    currentIndex = (currentIndex - 1);
    dragons[currentIndex].style.display = "block";
    updatecolorforward();
    updatecolorbackward();
    ballcolor();
    }
});
function updatecolorforward(){
if(currentIndex==2){
    forward.style.color="gray"
}
else{
    forward.style.color="black"
}
}
function updatecolorbackward(){
    if(currentIndex==0){
        backward.style.color="gray";
    }
    else{
        backward.style.color="black";
    }
}
function ballcolor(){
    if (currentIndex === 0) {
        indi1.style.backgroundColor = "rgb(79, 79, 190)";
        indi2.style.backgroundColor = "white";
        indi3.style.backgroundColor = "white";
    } else if (currentIndex === 1) {
        indi2.style.backgroundColor = "rgb(79, 79, 190)";
        indi1.style.backgroundColor = "white";
        indi3.style.backgroundColor = "white";
    } else {
        indi3.style.backgroundColor = "rgb(79, 79, 190)";
        indi1.style.backgroundColor = "white";
        indi2.style.backgroundColor = "white";
    }
}
indi1.addEventListener("click", function() {
    dragons[currentIndex].style.display = "none";
    currentIndex = 0;
    dragons[currentIndex].style.display = "block";
    updatecolorforward();
    updatecolorbackward();
    ballcolor();
});

indi2.addEventListener("click", function() {
    dragons[currentIndex].style.display = "none";
    currentIndex = 1;
    dragons[currentIndex].style.display = "block";
    updatecolorforward();
    updatecolorbackward();
    ballcolor();
});

indi3.addEventListener("click", function() {
    dragons[currentIndex].style.display = "none";
    currentIndex = 2;
    dragons[currentIndex].style.display = "block";
    updatecolorforward();
    updatecolorbackward();
    ballcolor();
});