var player1, player2;
var one, two, three, four, five, six, seven, eight, nine;
var choice;
var winner;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var audio_write = new Audio("Cursor.mp3");
var audio_win = new Audio("Enemy_Dies.mp3");
var audio_draw = new Audio("Cancel.mp3");
var end;

p1.style.color = "red";


one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine")

//constructor
player1 = true;
winner = 0;
choice = 9;
end = 0;

//add "X" or "O"
one.addEventListener("click",write);
two.addEventListener("click",write);
three.addEventListener("click",write);
four.addEventListener("click",write);
five.addEventListener("click",write);
six.addEventListener("click",write);
seven.addEventListener("click",write);
eight.addEventListener("click",write);
nine.addEventListener("click",write);

//win
function win(){
    audio_win.play(); 
    end = 1;
    //player 1
    //vertical check
    if (((one.innerText == "X") && (two.innerText == "X") &&(three.innerText == "X")) || ((four.innerText == "X") && (five.innerText == "X") &&(six.innerText == "X")) || ((seven.innerText == "X") && (eight.innerText == "X") &&(nine.innerText == "X"))){
       alert(`${p1.innerHTML} has won!`);
       winner = 1;
    }
    //diagonal check
    if(((one.innerText == "X") && (five.innerText == "X") &&(nine.innerText == "X")) || ((three.innerText == "X") && (five.innerText == "X") &&(seven.innerText == "X"))) {
        alert(`${p1.innerHTML} has won!`); 
       winner = 1;
    }
    //horizontal check
    if (((one.innerText == "X") && (four.innerText == "X") &&(seven.innerText == "X")) || ((two.innerText == "X") && (five.innerText == "X") &&(eight.innerText == "X")) || ((three.innerText == "X") && (six.innerText == "X") &&(nine.innerText == "X"))){
       alert(`${p1.innerHTML} has won!`);
       winner = 1;
     }

     //player2
     //vertical check
    if (((one.innerText == "O") && (two.innerText == "O") &&(three.innerText == "O")) || ((four.innerText == "O") && (five.innerText == "O") &&(six.innerText == "O")) || ((seven.innerText == "O") && (eight.innerText == "O") &&(nine.innerText == "O"))){
        alert(`${p2.innerHTML} has won!`);
        winner = 1;
     }
     //diagonal check
     if(((one.innerText == "O") && (five.innerText == "O") &&(nine.innerText == "O")) || ((three.innerText == "O") && (five.innerText == "O") &&(seven.innerText == "O"))) {
        alert(`${p2.innerHTML} has won!`);
        winner = 1;
     }
     //horizontal check
     if (((one.innerText == "O") && (four.innerText == "O") &&(seven.innerText == "O")) || ((two.innerText == "O") && (five.innerText == "O") &&(eight.innerText == "O")) || ((three.innerText == "O") && (six.innerText == "O") &&(nine.innerText == "O"))){
        alert(`${p2.innerHTML} has won!`);
        winner = 1
      }
    }

//write
function write(){
    win();
    draw(choice,end);
    if(choice >= 0 && winner == 0){
    if(this.innerText == "--"){
    if(player1 == true){
    this.innerText = "X";
    p1.style.color = "white";
    p2.style.color = "red";
    player1 = false;
    audio_write.play();
    choice -= 1;
    }
    else {
        if(winner == 0){
    this.innerText = "O";
    player1 = true;
    p1.style.color = "red";
    p2.style.color = "white";
    audio_write.play();
    choice -= 1;
        }
    }
    }
    }
}

//draw
function draw(choice,end){
    audio_draw.play();
    if(choice <= 0 && end == 0)
    alert("Game draw");
}

p1.addEventListener("click",function(){
    if(this.innerHTML == "Player1 X"){
    name1 = prompt("Enter your name","")
    this.innerHTML = name1+" [X]";
    }
})
p2.addEventListener("click",function(){
    if(this.innerHTML == "Player2 O"){
    name2 = prompt("Enter your name","")
    this.innerHTML = name2+" [O]";
    }
})