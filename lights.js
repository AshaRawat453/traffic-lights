function turnOnRed() {
    document.getElementById("stopButton").style.backgroundColor="red";
    document.getElementById("stopLight").style.backgroundColor="red";
    
    document.getElementById("readyButton").style.backgroundColor="#1f1d41";
    document.getElementById("readyLight").style.backgroundColor="#4b5069";

    document.getElementById("goButton").style.backgroundColor="#1f1d41";
    document.getElementById("goLight").style.backgroundColor="#4b5069";
}
function turnOnYellow() {
    document.getElementById("readyButton").style.backgroundColor="yellow";
    document.getElementById("readyLight").style.backgroundColor="yellow";

    document.getElementById("stopButton").style.backgroundColor="#1f1d41";
    document.getElementById("stopLight").style.backgroundColor="#4b5069";

    document.getElementById("goButton").style.backgroundColor="#1f1d41";
    document.getElementById("goLight").style.backgroundColor="#4b5069";
}
function turnOnGreen() {
    document.getElementById("goButton").style.backgroundColor="green";
    document.getElementById("goLight").style.backgroundColor="green";

    document.getElementById("stopButton").style.backgroundColor="#1f1d41";
    document.getElementById("stopLight").style.backgroundColor="#4b5069";
    
    document.getElementById("readyButton").style.backgroundColor="#1f1d41";
    document.getElementById("readyLight").style.backgroundColor="#4b5069";
}