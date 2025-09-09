let slider = document.querySelector(".slides")
let sliderCount = document.querySelectorAll(".slide").length
console.log(sliderCount)

let btn_preview = document.querySelector(".preview")
let btn_next = document.querySelector(".next")

let index = 0

function goToSlide(index){
    if (index >= sliderCount) {
        index = 0
    }
    else if (index < 0) {
        index = sliderCount - 1
    }
    slider.style.transform = `translateX(${-index * 100}%)`
    return index
} 

function ToTheLeft(){
    index -= 1
    index = goToSlide(index)
}

function ToTheRight(){
    index +=1
    index = goToSlide(index)
}
