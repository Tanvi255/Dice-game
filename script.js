
var i = Math.random(); 
i = i * 6;             
i = Math.floor(i) + 1; 
var randomimg="dice"+i+".png";
var randomImagesrc="images/"+randomimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImagesrc);

var j = Math.random(); 
j = j * 6;             
j = Math.floor(j) + 1; 
var randmimg="dice"+j+".png";
var randmImagesrc="images/"+randmimg;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randmImagesrc);

if(i>j){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(j>i){
    document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="Draw!"
}


