array = ["plane","pencil","book","bottle","map","ladder","Star","Clock"];
random = Math.floor(Math.random()*array.length);
desenhe = array[random]
console.log(desenhe);
document.getElementById("desenhe").innerHTML = "Desenhe: " + desenhe;
timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
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
function classifyCanvas(){
    classifier.classify(canvas,gotResults);
}
function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    console.log(results)
    result = results[0].label;
    confidence = Math.round(results[0].confidence * 100);
    document.getElementById("label").innerHTML = result;
    document.getElementById("confidence").innerHTML = confidence;
    UtterThis = new SpeechSynthesisUtterance(result.replace("_"," "));
    synth.speak(UtterThis);
}