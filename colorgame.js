var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector( "#hardBtn");
var pickedColor=pickColor();
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	if(colors[i])
    	{
    		squares[i].style.backgroundColor=colors[i];
    	}
    	else
    	{
    		//to hide the last three squares
    		squares[i].style.display="none";
    	}
    }


});
hardBtn.addEventListener("click",function(){
	numSquares=6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block";
    	
    }

});
colorDisplay.textContent=pickedColor;
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	this.textContent="New Colors"
	messageDisplay.textContent="";
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#458DBA";
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="CORRECT";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
			resetButton.textContent="Play Again";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"
		}
	});
}
function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
