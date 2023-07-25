
//add a Mode parameter to have different functionality for the different modes
function randomizeUnits(){

    const gameList = {
        'Birthright': birthrightUnits,
        'Conquest': conquestUnits,
        'Revelations': revelationsUnits,
    }
    let amount = parseInt(document.getElementById("random-amount").value);
    let currentUnitList = JSON.parse(JSON.stringify(gameList[sessionStorage.getItem('game')]));
    let selectedList = [];

    //loop through the unit list and grab all the guaranteed ones, removing all the banned ones
    for(unit in currentUnitList){
        if(currentUnitList[unit]["Availability"] == "Guaranteed"){
            selectedList.push(unit);
            delete currentUnitList[unit];
        }
        else if(currentUnitList[unit]["Availability"] == "Banned"){
            delete currentUnitList[unit];
        }
    }

    //loop through units of the currently selected game and fill up with Available ones
    for(let i = amount - selectedList.length; i > 0; i--){
        
        //pick a random unit
        let keys = Object.keys(currentUnitList);
        let randomUnit = keys[Math.floor(Math.random() * keys.length)];

        //add them to our list and remove from the array
        selectedList.push(randomUnit);
        delete currentUnitList[randomUnit];
    }

    alert(selectedList);
}