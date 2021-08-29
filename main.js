p1=""
p2=""
function adduser(){
p1=document.getElementById("player1_input").value ;
p2=document.getElementById("player2_input").value ;
localStorage.setItem("Username1",p1);
localStorage.setItem("Username2",p2);
window.location="gamepage.html";
}