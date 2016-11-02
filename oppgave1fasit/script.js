// Koden i denne fila kjøres hver gang man laster index.html på nytt (F5)

// Forhåndsdefinerte hjelpefunksjoner

function color(element, color) {
    element.style = "background: " + color + ";";
}

function getBody(){
    return document.getElementById("body")
}

////////////////////////
// Din kode under her //

console.log("Hei og hopp")


function colorRed(){
    color(getBody(), "red")
}

function colorGreen(){
    color(getBody(), "darkGreen")
}

function colorBlue(){
    color(getBody(), "darkGreen")
}

colorGreen()