var H_LENGTH = 130;
var M_LENGTH = 175;
var S_LENGTH = 190;
var H_WIDTH = 6;
var M_WIDTH = 4;
var S_WIDTH = 2;
var H_COLOR = "#AA66CC";
var M_COLOR = "#99CC00";
var S_COLOR = "#33B5E5";
var curShowTimeSeconds =0;
var END_X = 0;
var END_Y = 0;

window.onload = function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height =600;
	setInterval(function(){
		curShowTimeSeconds = getCurrentShowTimeSeconds();
		draw(context);
	},50);
}

function draw(cxt){
	cxt.clearRect(0,0,602,602);
	var hours = parseInt(curShowTimeSeconds/3600);
	var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
	var seconds = curShowTimeSeconds%60;
	drawline(H_WIDTH,H_COLOR,H_LENGTH,hours,cxt);
	drawline(M_WIDTH,M_COLOR,M_LENGTH,minutes,cxt);
	drawline(S_WIDTH,S_COLOR,S_LENGTH,seconds,cxt);
	
	
	cxt.font = "bold 20px Arial";
	cxt.textAlign = "center";
	cxt.fillText("12",301,91);
	cxt.fillText("3",521,301);
	cxt.fillText("6",301,531);
	cxt.fillText("9",81,301);
	cxt.beginPath();
	cxt.arc(301,301,240,0,2*Math.PI);
	cxt.moveTo(501,301);
	cxt.arc(301,301,200,0,2*Math.PI);
	cxt.strokeStyle = "#7d77ab";
	cxt.stroke();

	

}
function drawline(width,color,length,num,cxt){
	
	END_X = 301+Math.round(length*Math.cos(((num-15)*360/60)*Math.PI/180));
	END_Y = 301+Math.round(length*Math.sin(((num-15)*360/60)*Math.PI/180));
	cxt.beginPath();
	cxt.lineWidth = width;
	cxt.strokeStyle = color;
	cxt.moveTo(301,301);
	cxt.lineTo(END_X,END_Y);
	cxt.stroke();
	cxt.closePath();	
}
function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var ret = curTime.getHours()*3600 + curTime.getMinutes()*60 +curTime.getSeconds();
	return ret ;
}

