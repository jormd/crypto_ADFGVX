function decoupage(text){
    return text.match(/.{1,2}/g);
}

function searchDoublon(text){
    let tab = decoupage(text);
    console.log(tab);
    let doublon = [];

    for(let i = 0; i<tab.length; i++){
        if(doublon[tab[i]] == null){
            for(let a = i+1; a<tab.length; a++){
                if(tab[i] === tab[a]){
                    if(doublon[tab[i]] != null){
                        doublon[tab[i]] = doublon[tab[i]]+1;
                    }
                    else{
                        doublon[tab[i]] = 2;
                    }
                }
            }
        }
    }
    console.log(doublon);
    console.log(possibility(doublon));
    return doublon;
}

function possibility(array){
    console.log(Math.max(...array));
    console.log(array)
}

function createMatriceAletoire(text) {
    let doublon = searchDoublon(text);


}