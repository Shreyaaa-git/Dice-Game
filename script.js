// 1.changing dice Image
// 2.changing h1 with player(1/2) won and adding sound
// 3.press start to refresh

// generates random integer b/w [1,6]
var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

// Task1
//function to chnage dice image
function ChangeImg(n)
{
    var s="dice"+n+".png";
    return s;
}

//changing img as per value of n
// two ways
// 1
var element=document.getElementById("dice1");
element.setAttribute("src",ChangeImg(n1));

// 2
var element=document.getElementById("dice2");
element.src=ChangeImg(n2);

// Task2
var element2=document.querySelector("h1");

var audio1=new Audio('p1.mp3');
var audio2= new Audio("p2.mp3");
var audio3=new Audio('tied.mp3');

if(n1>n2)
{
    element2.textContent="Player1 Won!";
    audio1.play();
}

if(n1<n2)
{
    element2.textContent="Player2 Won!";
    audio2.play();
}

if(n1==n2)
{
    element2.textContent="Match Tied!";
    audio3.play();
}

// task3
function Refresh(){
    location.reload();
}