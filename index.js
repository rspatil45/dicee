// alert("Hi rahul");
var randomN1=Math.floor(Math.random()*6)+1; //generate randome number from zero to six
var randomN2=Math.floor(Math.random()*6)+1;

var image1_src = "images/dice"+randomN1+".png";
var image2_src = "images/dice"+randomN2+".png";

var x = document.querySelectorAll("img");

x[0].setAttribute("src",image1_src);
x[1].setAttribute("src",image2_src);

 if (randomN1>randomN2)
 {
   document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
 }
 else if(randomN2>randomN1){
   document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
 }
 else {
   document.querySelector("h1").innerHTML="💔 Match Draw";
 }
