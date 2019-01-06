const frLetterApparition = ['e', 'a', 'i', 's', 'n', 'r'];

/**
 * Permet de transformer le text en tableau contenant que 2 caractères par cellule
 * @param text
 * @returns {*}
 */
function decoupage(text){
    return text.match(/.{1,2}/g);
}

/**
 * permet de trouver les doublon pour utilisé la fréquence dessus
 * @param text
 * @returns {Array}
 */
function searchDoublon(text){
    let tab = decoupage(text);
    let doublon = [];
    let compt = 0;

    for(let i = 0; i<tab.length; i++){
        if(doublon[tab[i]] == null){
            for(let a = i+1; a<tab.length; a++){
                if(tab[i] === tab[a]){
                    if(doublon[tab[i]] != null){
                        doublon[compt][1] = doublon[compt][1]+1;
                    }
                    else{
                        doublon[compt] = [];
                        doublon[compt][0] = tab[i];
                        doublon[compt][1] = 2;
                        compt++;
                    }
                }
            }
        }
    }

    return rangementParnbApparition(doublon);
}

/**
 * Méthode permettant de rangé le tableau des doublon par rapport à la fréquence d'apparistion (mode décroissant, plus grand au plus petit)
 * @param doublon
 * @param nb
 * @returns {*}
 */
function rangementParnbApparition(doublon, nb = 1) {
    for (var i = 0; i < doublon.length; i++){
        if(i+1 < doublon.length){
            if(doublon[i+1][1] > doublon[i][1]){
                var tmp = doublon[i];
                doublon[i] = doublon[i+1];
                doublon[i+1] = tmp;
            }
        }
    }

    if(nb < doublon.length-1){
        rangementParnbApparition(doublon, nb+1);
    }

    return doublon;
}

/**
 * Méthode permettant de positionner les lettres par rapport à la fréquence d'apparition
 * @param doublon
 * @returns {Array}
 */
function positionnementLettre(doublon) {
    let tab = [];
    for (var i = 0; i < doublon.length; i++){
        for (var b=0; b<6; b++){
            // pour ne pas multiplie le nombre de champs en ligne
            if(tab[b] == null) {
                tab[b] = [];
            }
            for (var a=0; a<6; a++){
                if(doublon[i][0] === alphabetCaractSpecial[b]+alphabetCaractSpecial[a]){
                    tab[b][a] = frLetterApparition[i];
                }
                // pour ne pas multiplie le nombre de champs en ligne
                else if(tab[b].length < 6){
                    tab[b].push('');
                }
            }
        }
    }
    return tab;
}

function createMatriceAletoire(text) {
    let doublon = searchDoublon(text);
    let tab = positionnementLettre(doublon);
    let compt = 0;

    for (let i=0; i<6; i++){
        tab[i] = [];
        for (let a=0; a<6; a++){
            if(tab[i][a].length === 0 || tab[i][a] === ""){
                let can = true;
                //vérifié si la lettre n'est pas dans le tableau (par rapport au lettre de fréquence mise
                for (let b = 0; b < doublon.length; b++){

                }
                if(can){
                    tab[i][a] = ;
                }
            }
            compt ++;
        }
    }

}