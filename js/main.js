const livs = document.querySelectorAll(".liv_img")
const livv = document.querySelector(".livv")
livs.forEach((item)=>{
    item.addEventListener("click",()=>{
        livv.setAttribute("src", `${item.getAttribute("src")}`)
        
    })
})