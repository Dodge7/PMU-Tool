function togglePickingMethod(id){
    document.getElementById("picking-method-options-wrapper").style.display = "block";

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
    resetAdvancedTabs();
}

function lightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
}

function gameSelect(game){
    sessionStorage.setItem('game', game);
    document.getElementById("game-display").style.display = "block";
    document.getElementById("picking-method").style.display = "block";
    document.getElementById("currentGame").innerText = sessionStorage.getItem('game');
    resetAdvancedTabs();
}

function displayAdvanced(){
    let target = "advanced-".concat("", sessionStorage.getItem('method'));

    if (document.getElementById(target).style.display == "none"){
        document.getElementById(target).style.display = "block";
    } else {
        document.getElementById(target).style.display = "none";
    }
}

function resetAdvancedTabs(){
    let advancedTabs = document.getElementById('advanced-tab').getElementsByTagName('div');
    for (var i = 0; i < advancedTabs.length; i++){
        let current = advancedTabs[i];
        current.style.display = "none";
    }
    let advancedCheckbox = document.getElementById("advanced");
    advancedCheckbox.checked = false;

    clearAdvancedUnitList();
}

function tweakRandomAvailability(selection){
    //we'll have a series of radio buttons, a set of 3 for each unit, labelled Available, Guaranteed or Banned
    //The options will default to whatever is set as default in the unit list
    //Changing an option will change the value in the current unit list, so randomizations will follow the user's choice
    pass; 
}

function advancedUnitAvailabilityList(){
    //Loop through the current unit list, creating a set of radio buttons for each unit, with default selection at their
    //proper default Availability
    const gameList = {
        'Birthright': birthrightUnits,
        'Conquest': conquestUnits,
        'Revelations': revelationsUnits,
    }
    let currentUnitList = JSON.parse(JSON.stringify(gameList[sessionStorage.getItem('game')]));
    let container = document.getElementById("advanced-random");
    let options = {"Available": false, "Guaranteed": false, "Banned": false};

    let unitAvailabilityList = document.createElement('div');
    unitAvailabilityList.id = "availability-unit-list";

    container.appendChild(unitAvailabilityList);

    //Loop through units and make an element for each
    for(unit in currentUnitList){
        let unitWrapper = document.createElement('div');
        let unitName = document.createElement("label");
        unitName.innerText = unit;
        unitName.style.marginRight = '10px';
        unitWrapper.appendChild(unitName);
        for(let key in options){
            let label = document.createElement("label");
            label.innerText = key;
            label.style.marginLeft = '10px';
            let input = document.createElement("input");
            input.type = "radio";
            input.name = `${unit}Availability`;
            input.style.marginLeft = '10px';
            label.appendChild(input);
            unitWrapper.appendChild(label);
        }
        unitAvailabilityList.appendChild(unitWrapper);
    }
}

function clearAdvancedUnitList(){
    let advancedUnitList = document.getElementById("availability-unit-list");
    advancedUnitList.parentNode.removeChild("availability-unit-list");
}


//TODO: Make unit list availability default to their default availability

document.getElementById("light-mode-toggle").addEventListener("click", lightMode);

document.getElementById("game-selection").addEventListener("change", (game) => { gameSelect(game.target.value) });

document.getElementById("picking-method").addEventListener("change", (method) => { togglePickingMethod(method.target.value) });

document.getElementById("advanced").addEventListener("click", displayAdvanced);

document.getElementById("adjust-availability").addEventListener("click", advancedUnitAvailabilityList);