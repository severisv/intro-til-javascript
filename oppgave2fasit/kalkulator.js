function one() {
    appendToScreen("1")
}

function two() {
    appendToScreen("2")
}

function three() {
    appendToScreen("3")
}

function four() {
    appendToScreen("4")
}

function five() {
    appendToScreen("5")
}

function six() {
    appendToScreen("6")
}

function seven() {
    appendToScreen("7")
}

function eight() {
    appendToScreen("8")
}

function nine() {
    appendToScreen("9")
}

function zero() {
    appendToScreen("0")
}

function ce() {
    setScreenValue("")
}

function plus() {
    appendToScreen(" + ")
}

function minus() {
    appendToScreen(" - ")
}

function times() {
    appendToScreen(" * ")
}

function divide() {
    appendToScreen(" / ")
}

function calculate() {
    var screenValue = getScreenValue();
    try {
        var result = eval(screenValue);
        setScreenValue(result)
    }
    catch (e){
        setScreenValue("error")
    }
}


// Hjelpefunksjoner

function getScreenValue(){
    return document.getElementById('screen').value;
}

function setScreenValue(value){
    document.getElementById('screen').value = value;
}

function appendToScreen(value){
    var screenValue = getScreenValue();
    if (screenValue == "error" || screenValue == "Infinity") {
        screenValue = ""
    }
    setScreenValue(screenValue + value)
}