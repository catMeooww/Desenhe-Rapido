array = ["plane","pencil","book","bottle","map","ladder"];
random = Math.floor(Math.random()*array.length);
draw = array[random]
console.log(draw);
document.getElementById("desenhe").innerHTML = draw;
timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;
