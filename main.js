
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width= screen.width;
    new_width= screen.width-70;
    new_height= screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

     last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
     last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
}
if (width>992){
    canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseUP";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    cur_pos_MouseX=e.clientX-canvas.offsetLeft;
    cur_pos_MouseY=e.clientY-canvas.offsetTop;
    if (mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last Position of X and Y Coordinates");
        console.log("X="+last_pos_of_x+"Y="+ last_pos_of_y);
        ctx.moveTo(last_pos_of_x,last_pos_of_y);
        console.log("Current Position of X and Y Coordinates");
        console.log("X="+cur_pos_MouseX+"Y="+ cur_pos_MouseY);
        ctx.lineTo(cur_pos_MouseX,cur_pos_MouseY);
        ctx.stroke();
    }
    last_pos_of_x=cur_pos_MouseX;
    last_pos_of_y=cur_pos_MouseY;
}
}
