let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Player ${winner} is Winner `;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pval1 = boxes[pattern[0]].innerText; 
        let pval2 = boxes[pattern[1]].innerText; 
        let pval3 = boxes[pattern[2]].innerText;

        if(pval1 != "" && pval2 != "" && pval3 != ""){
            if(pval1 == pval2 && pval2 == pval3){
                showWinner(pval1);
            }
        }

    }
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
