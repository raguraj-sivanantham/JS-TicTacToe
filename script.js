var board=[" "," "," "," "," "," "," "," "," "];
var turn="😡";
var count=0;
function play(value){
    if(board[value-1]==" "){
        board[value-1]=turn;
    }else{
        alert("Space not available !");
    }
    if(turn=="😡"){
        turn="😆"
    }else{
        turn="😡"
    }
    count++;
    console.log(count);
    console.log(board);
    if(count>=5){
        checkWin();
    }
    if (count>=9){
        alert ("Draw...");
        disableButton();
    }
    printBoard();
}
function printBoard(){
    document.getElementById("button1").value=board[0];
    document.getElementById("button2").value=board[1];
    document.getElementById("button3").value=board[2];
    document.getElementById("button4").value=board[3];
    document.getElementById("button5").value=board[4];
    document.getElementById("button6").value=board[5];
    document.getElementById("button7").value=board[6];
    document.getElementById("button8").value=board[7];
    document.getElementById("button9").value=board[8];
}
function checkWin(){
    //check 1
    if(chk(0,1,2)){
        alert(board[0]+" is a winner !");disableButton()
    }else if(chk(3,4,5)){
        alert(board[3]+" is a winner !");disableButton()
    }else if(chk(6,7,8)){
        alert(board[3]+" is a winner !");disableButton()
    }
    //check 2
    else if(chk(0,3,6)){
        alert(board[3]+" is a winner !");disableButton()
    }else if(chk(1,4,7)){
        alert(board[1]+" is a winner !");disableButton()
    }else if(chk(2,5,8)){
        alert(board[2]+" is a winner !");disableButton()
    }

    //check 3
    else if(chk(0,4,8)){
        alert(board[0]+" is a winner !");disableButton()
    }else if(chk(2,4,6)){
        alert(board[2]+" is a winner !");disableButton()
    }
}
function chk(val1,val2,val3){
    var bool1=contentChk(val1,val2,val3);
    var bool2=spaceChk(val1,val2,val3);
    if(bool1 && bool2){
        return true;
    }else{
        return false;
    }
    
}
function contentChk(val1,val2,val3){
    if(board[val1]==board[val2] && board[val2]==board[val3]){
        return true;
    }else{
        return false;
    }
}
function spaceChk(val1,val2,val3){
    if(board[val1]!=" " && board[val2]!=" "&& board[val3]!=" "){
        return true;
    }else{
        return false;
    }
}
function disableButton(){
    button1.disabled=true;
    button2.disabled=true;
    button3.disabled=true;
    button4.disabled=true;
    button5.disabled=true;
    button6.disabled=true;
    button7.disabled=true;
    button8.disabled=true;
    button9.disabled=true;
}