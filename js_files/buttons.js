
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
    game = sessionStorage.getItem('game');

    let currentUnitList = JSON.parse(JSON.stringify(gameList[game]));
    
    for(unit in currentUnitList){
        let pointValue = currentUnitList[unit]["Points"];
        let changedValue = document.getElementById(`${unit}Point`).value;

        if(changedValue != pointValue){
            gameList[game][unit]["Points"] = changedValue;
        }
    }

    sessionStorage.setItem('game', game);
}

function advancedUnitPointList(){
    if(document.contains(document.getElementById("point-unit-list"))){
        return;
    }

    let currentUnitList = JSON.parse(JSON.stringify(gameList[sessionStorage.getItem('game')]));
    let container = document.getElementById("advanced-points");

    let unitPointList = document.createElement('div');
    unitPointList.id = "point-unit-list";

    container.appendChild(unitPointList);

    //Loop through units and make an element for each
    for(unit in currentUnitList){
        let unitWrapper = document.createElement('div');
        let unitName = document.createElement("label");
        unitName.innerText = unit;
        unitName.style.marginRight = '10px';
        unitWrapper.appendChild(unitName);

        let label = document.createElement("label");
        label.innerText = "Value:";
        label.style.marginLeft = '10px';

        let input = document.createElement("input");
        input.type = "number";
        input.inputMode = "numeric";
        input.id = `${unit}Point`;
        input.min = 0;
        input.max = 99;
        input.value = currentUnitList[unit]['Points'];
        input.style.marginLeft = '10px';


        console.log(input.value);

        label.appendChild(input);
        unitWrapper.appendChild(label);
        unitPointList.appendChild(unitWrapper);
    }
}


function tweakTierPlacements(){
    game = sessionStorage.getItem('game');

    let currentUnitList = JSON.parse(JSON.stringify(gameList[game]));
    
    for(unit in currentUnitList){
        let tier = currentUnitList[unit]["Tier"];
        let options = document.getElementsByName(`${unit}Tier`);

        for(let i = 0; i < options.length; i++){
            if(options[i].checked && options[i].value != tier){
                gameList[game][unit]["Tier"] = options[i].value;
            }
        }
    }

    sessionStorage.setItem('game', game);
}

function advancedUnitTierList(){
    if(document.contains(document.getElementById("tier-unit-list"))){
        return;
    }

    let currentUnitList = JSON.parse(JSON.stringify(gameList[sessionStorage.getItem('game')]));
    let container = document.getElementById("advanced-tiers");
    let options = {"S": false, "A": false, "B": false, "C": false, "D": false, "F": false};

    let unitTierList = document.createElement('div');
    unitTierList.id = "tier-unit-list";

    container.appendChild(unitTierList);

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
            input.name = `${unit}Tier`;
            input.value = key;
            input.style.marginLeft = '10px';
            //If key is the unit's default tier, set it as checked
            if(key === currentUnitList[unit]['Tier']){
                input.checked = true;
            }

            label.appendChild(input);
            unitWrapper.appendChild(label);
        }
        unitTierList.appendChild(unitWrapper);
    }
}

function clearAdvancedUnitList(){

    document.getElementById("advanced-random").removeChild(document.getElementById("availability-unit-list"));
    document.getElementById("advanced-points").removeChild(document.getElementById("point-unit-list"));
    document.getElementById("advanced-tiers").removeChild(document.getElementById("tier-unit-list"));


    //if(document.contains("availability-unit-list")){
    //    let advancedUnitList = document.getElementById("availability-unit-list");
    //    advancedUnitList.parentNode.removeChild(advancedUnitList);
    //}
    //else if(document.contains("point-unit-list")){
    //    let advancedUnitList = document.getElementById("point-unit-list");
    //    advancedUnitList.parentNode.removeChild(advancedUnitList);
    //}
    //else if(document.contains("tier-unit-list")){
    //    let advancedUnitList = document.getElementById("tier-unit-list");
    //    advancedUnitList.parentNode.removeChild(advancedUnitList);
    //}


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