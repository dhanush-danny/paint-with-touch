

canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
color="blue";
width=3;
var mouse_event="";
var last_position_x,last_position_y;

canvas.addEventListener("mousedown",my_mouse_is_d);

function my_mouse_is_d(e){
mouse_event="mousedown";
color=document.getElementById("color").value;
width=document.getElementById("width").value;
console.log(mouse_event);
}
canvas.addEventListener("mouseup",my_mouse_is_u);

function my_mouse_is_u(e){
mouse_event="mouseup";
console.log(mouse_event);
}
canvas.addEventListener("mouseleave",my_mouse_leave);

function my_mouse_leave(e){
mouse_event="mouseleave";
console.log(mouse_event);

}
canvas.addEventListener("mousemove",my_mouse_moving);

function my_mouse_moving(e){
current_position_mouse_x= e.clientX-canvas.offsetLeft;
current_position_mouse_y= e.clientY-canvas.offsetTop;

if (mouse_event=="mousedown"){
    pen.beginPath();
    pen.strokeStyle=color;
    pen.lineWidth=width;

    pen.moveTo(last_position_x,last_position_y);
    pen.lineTo(current_position_mouse_x,current_position_mouse_y);
    pen.stroke();
}
last_position_x=current_position_mouse_x;
last_position_y=current_position_mouse_y;

}
function clear_Area(){
    console.log("clear");
    pen.clearRect(0,0,canvas.width,canvas.height);
    
    }
    document.getElementById("span_text_input's").style.display="inline-block";