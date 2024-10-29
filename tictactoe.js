let boxes=document.querySelectorAll(".box");
let rstBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-conatiner");
let msg=document.querySelector("#msg");
let turnO=true;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,5,7],
    [2,4,8],
    [0,4,8],
    [2,4,6]
]
let resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
let disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
let enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="yellow";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
      
    });
});
const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
let checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log(`winner is ${pos1val}`);
                showWinner(pos1val);
            }
        }
    }
};
newBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);