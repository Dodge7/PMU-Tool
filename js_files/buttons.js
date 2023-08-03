function toggleVisibility(id){
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

function advanced(){
    //TODO: Add functionality to the Advanced options
    pass;
}


document.getElementById("light-mode-toggle").addEventListener("click", lightMode);

//for(button in document.getElementsByClassName("dropdown-game-option")){
//    button.addEventListener("click", function(){ gameSelect(id) })
//}

document.getElementById("game-selection").addEventListener("change", (game) => { gameSelect(game.target.value) })

document.getElementById("picking-method").addEventListener("change", (method) => { toggleVisibility(method.target.value) })