
function toggleVisibility(id){
    let section = document.getElementById(id);
    //Take all other sections you want to hide
    let others = document.getElementById('picking-methods').getElementsByTagName('div');
    
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

function gameSelect(){
    //TODO: Allow changing between games
    pass;
}

function advanced(){
    //TODO: Add functionality to the Advanced options
    pass;
}