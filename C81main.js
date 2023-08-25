var canvas = document.getElementById("shablau");
var ctx= canvas.getContext("2d");
var color =  "blue";
ctx.beginPath();
ctx.strokStyle = color;
ctx.lineWidth = 10;
ctx.arc(200 , 200, 40  ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",  mymousedown);
    function mymousedown(e){
        color = document.getElementById("cor").value;
    mouseX  = e.clientX  - canvas.offsetLeft;
    mouseY =  e.clientY  - canvas.offsetTop;
    circle(mouseX , mouseY);
    }
    function circle(mouseX , mouseY){
        ctx.beginPath();
        ctx.strokStyle = color;
        ctx.lineWidth = 10;
        ctx.arc(mouseX , mouseY, 40  ,0 , 2*Math.PI);
        ctx.stroke();
    }
    function clearArea(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }