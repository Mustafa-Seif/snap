let featurs = document.getElementById("featurs");
console.log(featurs)
let slide = document.querySelector(".slide");
console.log(slide)



featurs.addEventListener("click",()=>{
    slide.classList.toggle("show_slide")
    console.log("first")

})