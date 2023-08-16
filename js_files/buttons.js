function togglePickingMethod(id){
    let section = document.getElementById(id);
    //Take all other sections you want to hide
    let others = document.getElementById('picking-methods').getElementsByTagName('div');
    //Loop through all the sections, showing the selected one and hiding the rest
    for (var i = 0; i < others.length; i++){
        let current = others[i];
        if (current == section){
            current.style.display = "block";
        } else {
            current.style.display = "none";
        }
    }
    //Set current picking method for future use
    sessionStorage.setItem('method', id);
}

function lightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
}

function gameSelect(game){
    sessionStorage.setItem('game', game);
    document.getElementById("game-display").style.display = "block";
    document.getElementById("currentGame").innerText = sessionStorage.getItem('game');
}

function displayAdvanced(){
    let target = "advanced-".concat("", sessionStorage.getItem('method'));
    if (document.getElementById(target).style.display == "none"){
        document.getElementById(target).style.display = "block";
    } else {
        document.getElementById(target).style.display = "none";
    }
}


document.getElementById("light-mode-toggle").addEventListener("click", lightMode);

document.getElementById("game-selection").addEventListener("change", (game) => { gameSelect(game.target.value) });

document.getElementById("picking-method").addEventListener("change", (method) => { togglePickingMethod(method.target.value) });

document.getElementById("advanced").addEventListener("click", displayAdvanced);