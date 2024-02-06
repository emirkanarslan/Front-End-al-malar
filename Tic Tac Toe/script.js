//selecting all ruired elements
const selectbox=document.querySelector(".select-box"),
selectXBtn=selectbox.querySelector(".playerX"),
selectOBtn=selectbox.querySelector(".playerO"),
playBoard=document.querySelector(".play-board"),
allBox=document.querySelectorAll("section span"),
players=document.querySelector(".players");

window.onload=()=>{
    for (let i = 0; i < allBox.length; i++) { 
        allBox[i].setAttribute("onclick", "clickedBox(this)");
        
    }

    selectXBtn.onclick = ()=>{
        selectbox.classList.add("hide"); //hide the select box on playerX button clicked
        playBoard.classList.add("show"); //show the playboard section on playerX button clicked
    }
    selectOBtn.onclick = ()=>{
        selectbox.classList.add("hide"); //hide the select box on playerX button clicked
        playBoard.classList.add("show"); //show the playboard section on playerO button clicked
        players.setAttribute("class", "players active player");
    }
}
//20dk dan devam et

let playerXIcon = "fas-fa-times";
let playerOIcon = "far-fa-circle";



function clickedBox(element){
    if(players.classList.contains("player")){
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
    }
}