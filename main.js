array = ["plane","pencil","book","bottle","map","ladder"];
random = Math.floor(Math.random()*array.length);
desenhe = array[random]
console.log(desenhe);
document.getElementById("desenhe").innerHTML = "Desenhe: " + desenhe;
timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}
function clearCanvas(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}