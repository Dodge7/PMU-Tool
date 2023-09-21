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

    if(document.getElementById("availability-unit-list")){
        resetAdvancedTabs();
    }
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
    if(document.getElementById("availability-unit-list")){
        resetAdvancedTabs();
    }
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

function tweakRandomAvailability(){

    const gameList = {
        'Birthright': birthrightUnits,
        'Conquest': conquestUnits,
        'Revelations': revelationsUnits,
    }
    game = sessionStorage.getItem('game');

    let currentUnitList = JSON.parse(JSON.stringify(gameList[game]));
    
    for(unit in currentUnitList){
        let availability = currentUnitList[unit]["Availability"];
        let options = document.getElementsByName(`${unit}Availability`);

        for(let i = 0; i < options.length; i++){
            if(options[i].checked && options[i].value != availability){
                gameList[game][unit]["Availability"] = options[i].value;
            }
        }
    }

    sessionStorage.setItem('game', game);
}

function advancedUnitAvailabilityList(){
    //Loop through the current unit list, creating a set of radio buttons for each unit, with default selection at their
    //proper default Availability
    const gameList = {
        'Birthright': birthrightUnits,
        'Conquest': conquestUnits,
        'Revelations': revelationsUnits,
    }
    if(document.contains(document.getElementById("availability-unit-list"))){
        return;
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
            input.value = key;
            input.style.marginLeft = '10px';
            //If key is the unit's default availability, set it as checked
            if(key === currentUnitList[unit]['Availability']){
                input.checked = true;
            }

            label.appendChild(input);
            unitWrapper.appendChild(label);
        }
        unitAvailabilityList.appendChild(unitWrapper);
    }
}

function tweakPointValues(){
    pass;
}

function advancedUnitPointList(){
    pass;
}


function tweakTierPlacements(){
    pass;
}

function advancedUnitTierList(){
    pass;
}

//TODO: Update this function to clear other advanced tabs as well
function clearAdvancedUnitList(){
    let advancedUnitList = document.getElementById("availability-unit-list");
    advancedUnitList.parentNode.removeChild(advancedUnitList);
}


document.getElementById("light-mode-toggle").addEventListener("click", lightMode);

document.getElementById("game-selection").addEventListener("change", (game) => { gameSelect(game.target.value) });

document.getElementById("picking-method").addEventListener("change", (method) => { togglePickingMethod(method.target.value) });

document.getElementById("advanced").addEventListener("click", displayAdvanced);

document.getElementById("adjust-availability").addEventListener("click", advancedUnitAvailabilityList);

document.getElementById("adjust-points").addEventListener("click", advancedUnitPointList);

document.getElementById("adjust-tiers").addEventListener("click", advancedUnitTierList);

document.getElementById("availability-button").addEventListener("click", tweakRandomAvailability);

document.getElementById("points-button").addEventListener("click", tweakPointValues);

document.getElementById("tiers-button").addEventListener("click", tweakTierPlacements);