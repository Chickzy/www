player1_name=localStorage.getItem("Username1");
player2_name=localStorage.getItem("Username2");
p1score=0;
p2score=0;

document.getElementById("player1").innerHTML=player1_name+": ";
document.getElementById("p1_score").innerHTML=p1score;

document.getElementById("player2").innerHTML=player2_name+": ";
document.getElementById("p2_score").innerHTML=p2score;

document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn: "+player2_name;

function send(){
 getword=document.getElementById("num_1").value ; 
 numberget=document.getElementById("num2").value ;
 answer= getword*numberget;
console.log("Answer is: "+answer);

question_word="<h4 >"+getword+" X "+numberget+"</h4>";
input_box="<br>Answer:<input type='number' id='inp_chck_box'>"
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num_1").value="";
document.getElementById("num2").value="";

}

var q_turn="p1"
var ans_turn="p2"
function check(){
var get_ans=document.getElementById("inp_chck_box").value ;
console.log("Answer: "+get_ans);
if(answer==get_ans){
    if(ans_turn=="p1"){
        p1score=p1score+1;
        document.getElementById("p1_score").innerHTML=p1score;
    }
    else{
        p2score=p2score+1;
        document.getElementById("p2_score").innerHTML=p2score;
    }
}
if(q_turn=="p1"){
    q_turn="p2";
    document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
}
else{
    q_turn="p1";
    document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
}
if(ans_turn=="p1"){
    ans_turn="p2";
    document.getElementById("player_ans").innerHTML="Answer turn-"+player2_name;
}
else{
    ans_turn="p1";
    document.getElementById("player_ans").innerHTML="Answer turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}