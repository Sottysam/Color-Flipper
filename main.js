const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let text = document.querySelector(".text")
const btn = document.querySelector(".btn")

btn.addEventListener("click",function(){
    let ashTag = "#"
    for(let i=0; i < 6; i++){
        ashTag += colors[random()]
        console.log(ashTag);
    }
    text.textContent = ashTag
    document.body.style.backgroundColor = ashTag
})

function random(){
    return Math.floor(Math.random() * colors.length)
}