canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_y = 10;
rover_x = 10;
bg_img = "mars.jpg";
rover_img = "rover.png";

function add() {
    bg_img_tag = new Image();
    bg_img_tag.onload = upload_bg;
    bg_img_tag.src = bg_img;
    rover_img_tag = new Image();
    rover_img_tag.onload = upload_rover;
    rover_img_tag.src = rover_img;
}

function upload_bg() {
    ctx.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
}

function up() {
    if (rover_y >= 0)
    {
        rover_y= rover_y-10;
        console.log("when up arrow is pressed, x = "+ rover_x + "y = " + rover_y);
        upload_bg();
        upload_rover();
    }
}

function down (){
    if (rover_y <= 500)
    {
    rover_y = rover_y + 10;
    console.log("when down arrow is pressed, x = "+ rover_x + "y = " + rover_y);
    upload_bg();
    upload_rover();
    }
}

function left (){
    if (rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed, x = "+ rover_x + "y = " + rover_y);
        upload_bg();
        upload_rover();
    }
}

function right(){
    if (rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed, x = "+ rover_x + "y = " + rover_y);
        upload_bg();
        upload_rover();
    }
}