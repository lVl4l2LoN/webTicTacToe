/* 
 Creating scripts to the Tic Tac Toe game to make it interactive
 */


function startGame(){
    document.turn = "X";
    setMessage(document.turn + " gets to start.");
}

function setMessage(msg){
    document.getElementById("message").innerText = msg;
}