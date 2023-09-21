const gameList = {
    'Birthright': birthrightUnits,
    'Conquest': conquestUnits,
    'Revelations': revelationsUnits,
}

function randomizeUnits(){

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

function randomizeUnitsByPoints(){

    let pointTotal = parseInt(document.getElementById("points-amount").value);
    let currentUnitList = JSON.parse(JSON.stringify(gameList[sessionStorage.getItem('game')]));
    let selectedList = [];

    //Loop through the unit list
    for(let i = Object.keys(currentUnitList).length; i > 0; i--){

        //Take a random unit
        let keys = Object.keys(currentUnitList);
        let randomUnit = keys[Math.floor(Math.random() * keys.length)];

        //Check point value, delete from Current List, and add to selected list
        if(currentUnitList[randomUnit]["Points"] <= pointTotal){
            selectedList.push(randomUnit);
            pointTotal -= currentUnitList[randomUnit]["Points"];
        }
        delete currentUnitList[randomUnit];
    }
    alert(selectedList);
}

function randomizeUnitsByTier(){
    let sTierAmount = parseInt(document.getElementById("s-tier-amount").value);
    let aTierAmount = parseInt(document.getElementById("a-tier-amount").value);
    let bTierAmount = parseInt(document.getElementById("b-tier-amount").value);
    let cTierAmount = parseInt(document.getElementById("c-tier-amount").value);
    let dTierAmount = parseInt(document.getElementById("d-tier-amount").value);

    let currentUnitList = JSON.parse(JSON.stringify(gameList[sessionStorage.getItem('game')]));
    let selectedList = [];
    
    //Loop through the unit list
    for(let i = Object.keys(currentUnitList).length; i > 0; i--){

        //Take a random unit
        let keys = Object.keys(currentUnitList);
        let randomUnit = keys[Math.floor(Math.random() * keys.length)];

        switch(currentUnitList[randomUnit]["Tier"]){
            case 'S':
                if(sTierAmount > 0){
                    selectedList.push(randomUnit);
                    sTierAmount--;
                }
                break;
            case 'A':
                if(aTierAmount > 0){
                    selectedList.push(randomUnit);
                    aTierAmount--;
                }
                break;
            case 'B':
                if(bTierAmount > 0){
                    selectedList.push(randomUnit);
                    bTierAmount--;
                }
                break;
            case 'C':
                if(cTierAmount > 0){
                    selectedList.push(randomUnit);
                    cTierAmount--;
                }
                break;
            case 'D':
                if(dTierAmount > 0){
                    selectedList.push(randomUnit);
                    dTierAmount--;
                }
                break;
            default:
                selectedList.push(randomUnit);
        }
        delete currentUnitList[randomUnit];
    }

    alert(selectedList);
}