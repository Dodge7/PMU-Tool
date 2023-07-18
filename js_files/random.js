
//add a Mode parameter to have different functionality for the different modes
function randomizeUnits(){

    const gameList = {
        'Birthright': 'birthrightUnits',
        'Conquest': 'conquestUnits',
        'Revelations': 'revelationsUnits',
    }
    let amount = parseInt(document.getElementById("random-amount").value);
    let currentUnitList = gameList[sessionStorage.getItem('game')];
    let selectedList = [];

    //loop through the unit list and grab all the guaranteed ones, removing all the banned ones
    for(unit in currentUnitList){
        if(unit["Availability"] == "Guaranteed"){
            selectedList.push(unit);
            currentUnitList.splice(indexOf(unit),1);
        }
        else if(unit["Availability"] == "Banned"){
            currentUnitList.splice(indexOf(unit),1);
        }
    }

    //loop through units of the currently selected game and fill up with Available ones
    for(let i = amount - selectedList.length; i < 0; i--){
        
        //pick a random unit
        var randomUnit = function (currentUnitList) {
            var keys = Object.keys(currentUnitList);
            return currentUnitList[keys[ keys.length * Math.random() << 0]];
        };
        //add them to our list and remove from the array
        selectedList.push(randomUnit);
        currentUnitList.splice(indexOf(randomUnit),1);
    }

    alert(currentUnitList);
}