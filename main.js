const slides = document.querySelectorAll(".slide");
const next =document.querySelector("#next");
const prev = document.querySelector("#prev");
let auto = true;
let slideInterval;

function nextSlide(){
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add("current")
    }else {
        slides[0].classList.add("current");
    }
    // i dont get this part
    setTimeout(current.classList.remove("current"))
}


function prevSlide(){
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add("current")
    }else {
        slides[slides.length - 1].classList.add("current");
    }
    // i dont get this part
    // setTimeout(current.classList.remove("current"))
}

next.addEventListener("click", () => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,4000)
    }
})
prev.addEventListener("click", () => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,4000)
    }
})

if(auto){
    slideInterval = setInterval(nextSlide,4000)
}