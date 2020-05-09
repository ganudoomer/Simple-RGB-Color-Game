var numb=6;
var colors=[];
var pickedColor;
var square=document.querySelectorAll(".square");
var colorDis=document.querySelector("#colorDis");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();

function init(){
  modeBtn();
  squareBtn();
  resetQ();

}

function modeBtn() {
  for (var i=0;i<mode.length; i++){
  mode[i].addEventListener("click",function () {
mode[0].classList.remove("selected");
mode[1].classList.remove("selected");
this.classList.add("selected");
this.textContent==="Easy" ? numb=3: numb=6;
resetQ();
  });
};
}


function squareBtn() {
  colorDis.textContent=pickedColor;
 for(i=0;i<square.length;i++){
  //add colors to sqaure
  square[i].style.background=colors[i];
   //add event listener
   square[i].addEventListener("click",function () {
        var  clilckedSqaure=this.style.backgroundColor
        if (clilckedSqaure===pickedColor) {
          msg.textContent="Correct ";
            changeColor(clilckedSqaure);  
            h1.style.background=clilckedSqaure;
            reset.textContent="Play Again? "

        }else {
          msg.textContent="Try Again";
          this.style.backgroundColor="#232323";
        }
   });
 }
}

  



function resetQ(){

  reset.textContent="New Colors";
  colors=colorGen(numb);
  pickedColor=pick();
  colorDis.textContent=pickedColor;
for(i=0;i<square.length;i++){
  //add colors to sqaure
  if(colors[i]){
  square[i].style.display="block";
square[i].style.background=colors[i];

  }else{
  square[i].style.display="none";
  }
  
  }
 h1.style.background="steelblue";
 msg.textContent="";
};
reset.addEventListener("click",function () {
 resetQ();
});



 //if correct this function changes every color
 	function changeColor(colors) {
 		for (var i=0;i<square.length;i++){
           square[i].style.background=colors;
               
 	}
 }
 //for picking a randomcolor as answer
 function pick() {
 	var random=Math.floor(Math.random()*colors.length);
    return colors[random];
 }
 //for genrating random colors
function colorGen(num) {
	var arr=[];
	for(var  i=0;i<num;i++){
		arr.push(gen());
		
	}return arr;
}
//rgb color genrator
function gen() {
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
 return "rgb("+r+", "+g+", "+b+")";
}
