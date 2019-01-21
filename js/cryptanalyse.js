const frLetterApparition = ['e', 'a', 'i', 's', 'n', 'r'];
const enLetterApparition = ['e', 't', 'a', 'o', 'n', 'i'];


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
                    let existing = false;
                    for(var y = 0; y<doublon.length; y++){
                        if(doublon[y][0] === tab[i]){
                            doublon[y][1] = doublon[y][1]+1;
                            existing = true;
                        }
                    }
                    if(!existing){
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
 */
function positionnementLettre(doublon, langage, pos) {
    var tab = [];
    for (var i = 0; i < doublon.length; i++){
        for (var b=0; b<6; b++){
            // pour ne pas multiplie le nombre de champs en ligne
            if(tab[b] === undefined){
                tab[b] = [];
            }

            for (var a=0; a<6; a++){
                if(doublon[i][0] === alphabetCaractSpecial[b]+alphabetCaractSpecial[a]){
                    if(langage === "fr"){

                        tab[b][a] = selection(pos, frLetterApparition,i);
                    }
                    else if(langage === "en"){
                        tab[b][a] = selection(pos, enLetterApparition,i);
                    }
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

function selection(pos, alphabat, index) {
    switch (pos){
        case 0:
            return alphabat[index];
            break;
        case 1:
            if(index === 0){
                return alphabat[index]
            }
            if(index+1 > 6){
                return alphabat[(index+1)%6]
            }
            return alphabat[index+1];
            break;
        case 2:
            if(index === 0){
                return alphabat[index]
            }
            if(index+2 > 6){
                return alphabat[(index+2)%6];

            }
            return alphabat[index+2];
            break;
        case 3:
            if(index === 0){
                return alphabat[index]
            }
            if(index+3 > 6){
                return alphabat[(index+2)%6];

            }
            return alphabat[index+3];
            break;
        case 4:
            if(index === 0){
                return alphabat[index]
            }
            if(index+4 > 6){
                return alphabat[(index+4)%6];

            }
            return alphabat[index+4];
            break;
        case 5:
            if(index === 0){
                return alphabat[index+1]
            }
            if(index+1 > 6){
                return alphabat[(index+1)%6];

            }
            return alphabat[index+1];
            break;
        case 6:
            if(index === 0){
                return alphabat[index+1]
            }
            if(index+2 > 6){
                return alphabat[(index+2)%6];

            }
            return alphabat[index+2];
            break;
        case 7:
            if(index === 0){
                return alphabat[index+1]
            }
            if(index+3 > 6){
                return alphabat[(index+3)%6];

            }
            return alphabat[index+3];
            break;
        case 8:
            if(index === 0){
                return alphabat[index+1]
            }
            if(index+4 > 6){
                return alphabat[(index+4)%6];

            }
            return alphabat[index+4];
            break;
        case 9:
            if(index === 0){
                return alphabat[index+2]
            }
            if(index+2 > 6){
                return alphabat[(index+2)%6];

            }
            return alphabat[index+2];
            break;
        case 10:
            if(index === 0){
                return alphabat[index+2]
            }
            if(index+3 > 6){
                return alphabat[(index+3)%6];

            }
            return alphabat[index+3];
            break;
        case 11:
            if(index === 0){
                return alphabat[index+2]
            }
            if(index+4 > 6){
                return alphabat[(index+4)%6];

            }
            return alphabat[index+4];
            break;
        case 12:
            if(index === 0){
                return alphabat[index+3]
            }
            if(index+3 > 6){
                return alphabat[(index+3)%6];

            }
            return alphabat[index+3];
            break;
        case 13:
            if(index === 0){
                return alphabat[index+3]
            }
            if(index+4 > 6){
                return alphabat[(index+4)%6];

            }
            return alphabat[index+4];
            break;
        case 14:
            if(index === 0){
                return alphabat[index+4]
            }
            if(index+4 > 6){
                return alphabat[(index+4)%6];

            }
            return alphabat[index+4];
            break;
        default:
                return null;
            break;
    }
    return false;
}

/**
 * Permet de cryptanalysé le texte donnée et retourné un ensemble de possibilité
 * @param text
 * @returns {*}
 */
function hackChaine(text, langage) {
    let doublon = searchDoublon(text);


    let possibility = [];


    for(var t=0; t<15; t++){

        let alphabet = alphabetNum;


        for(var i = 0; i< doublon.length; i++){
            for (var b=0; b<6; b++){
                for (var a=0; a<6; a++){
                    if(doublon[i][0] === alphabetCaractSpecial[b]+alphabetCaractSpecial[a]){
                        if(langage === "fr"){
                            alphabet = remove(alphabet, selection(t, frLetterApparition,i));
                        }
                        else if(langage === "en"){
                            alphabet = remove(alphabet, selection(t, enLetterApparition,i));
                        }
                    }
                }
            }
        }


        for(var x=0; x< 1000; x++){
            let tab = positionnementLettre(doublon, langage, t);
            let matrix = createMatrice(tab, alphabet);

            var result = "";
            for (var a=0; a<text.length; a+=2){
                var ligne = alphabetCaractSpecial.findIndex(function (element) {
                    return element === text[a];
                });

                var col = alphabetCaractSpecial.findIndex(function (element) {
                    return element === text[a+1];
                });
                result += matrix[ligne][col];
            }
            possibility.push(result);
        }

        possibility = cleanResult(possibility);

    }


    return possibility;
}


/**
 * Permet de nettoyé le tableau de possibilité, on retire les nombre qui est un salt
 * @param tab
 * @returns {*}
 */
function cleanResult(tab) {
    let enter = false;
    for(var t=0; t<tab.length; t++){
        if(hasNumber(tab[t])){
            tab = remove(tab, tab[t]);
            enter = true;
        }
    }
    if(enter){
        return cleanResult(tab);
    }

    return tab;
}

/**
 * Permet de supprimer un élément du tableau
 * @param array
 * @param element
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array | Uint8Array | Int16Array | Float32Array | Uint8ClampedArray | Uint16Array}
 */
function remove(array, element) {
    return array.filter(el => el !== element);
}

/**
 * check si la chaine contien un chiffre
 * @param text
 * @returns {boolean}
 */
function hasNumber(text) {
    return /\d/.test(text);
}

/**
 * Permet  de crée une matrice en aléatoire
 * @param tab
 * @param alphabet
 * @returns {*}
 */
function createMatrice(tab, alphabet) {

    for (let i=0; i<6; i++){
        for (let a=0; a<6; a++){
            if(tab[i][a] === ""){
                let num = Math.random() * alphabet.length;
                let letter = alphabet[Math.floor(num)];
                tab[i][a] = letter;

                alphabet = remove(alphabet, letter);
            }
        }
    }

    return tab;
}