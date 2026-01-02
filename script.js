let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_btn");
let new_btn = document.querySelector("#new_btn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let count = 0;
let turnX = true; // first x will be given chance
// storing winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = ()=>{
        turnX = true;
        count = 0;
        enable_boxes();
        msg_container.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count == 9 && !isWinner){
            gameDraw();
        }
    });
});
    const disable_boxes = ()=>{
        for(let box of boxes){
            box.disabled = true;
        }
    }
    const enable_boxes = ()=>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    }
    const showWinner = (winner)=>{
        msg.innerText = `Congratulations! Winner is ${winner}`;
        msg_container.classList.remove("hide");
        disable_boxes();
    }
    const checkWinner = () =>{
        for(pattern of winPatterns){
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner is",pos1val);
                    showWinner(pos1val);
                }
            }
        }

    };
new_btn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);