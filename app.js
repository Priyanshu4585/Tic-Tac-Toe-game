let boxes = document.querySelectorAll(".box")
let resetgame = document.querySelector("#resetgame")
let newGameBtn = document.querySelector("#newGame")
let msgCnt = document.querySelector(".msgCnt")
let msg = document.querySelector("#msg")

let turnO = true

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]

const resetGAME =()=>{
    turnO = true
    enableBoxes()
    msgCnt.classList.add("hide")
    return p=0

}
let p = 0;

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
   if(turnO===true){
    box.innerText = "O"
    turnO = false
    box.style.color = "#191913"
   }else{
    box.innerText = "X"
    turnO = true
    box.style.color = "#500000"
   }
   box.disabled = true
   checkWinner()
   p++
   if(p===9){
    draw()
   }

 })

})

const disableBoxes =()=>{
    for(let box of boxes){
    box.disabled= true
}
}
const enableBoxes =()=>{
    for(let box of boxes){
    box.disabled= false
    box.innerText = ""
}
}
const draw= ()=>{
    msg.innerText = `Match was draw`
    msgCnt.classList.remove("hide") 
    disableBoxes()
    return p = 0

    }


const showWinner=(winner)=>{
msg.innerText = `Congratulations, the winner is  '${winner}'`
msgCnt.classList.remove("hide") 
disableBoxes()
return p=0
}


const checkWinner = ()=>{
for(let pattern of winPatterns){
let posVal1 = boxes[pattern[0]].innerText
let posVal2 = boxes[pattern[1]].innerText
let posVal3 = boxes[pattern[2]].innerText

if(posVal1 != "" && posVal2 != "" && posVal3 !="") {
if(posVal1===posVal2 && posVal2 ===posVal3){
    showWinner(posVal1)
}      
} 
}
}

newGameBtn.addEventListener("click",resetGAME)
resetgame.addEventListener("click",resetGAME)
