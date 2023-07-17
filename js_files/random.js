
//add a Mode parameter to have different functionality for the different modes
function randomizeUnits(){

    const gameList = {
        'Birthright': 'birthrightUnits',
        'Conquest': 'conquestUnits',
        'Revelations': 'revelationsUnits',
    }
    let amount = parseInt(document.getElementById("random-amount").value);
    let currentGame = sessionStorage.getItem('game');
    let currentUnitList = gameList[currentGame];

    //loop through units of the currently selected game, take all the Guaranteed ones, then fill up with Available ones
    for(let i = amount; i > 0; i--){

    }


}
