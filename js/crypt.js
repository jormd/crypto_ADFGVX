/**
 * Méthode cryptant le text
 * @param text
 */
function modifyText(text) {
    var tab = generateTabSubtitution();

    var textCrypt = [];

    for(var a=0; a<text.length; a++){
        var pos = findInArray(tab, text[a]);

        textCrypt.push(symbole(pos));
    }

    textCrypt = textCrypt.join('');

    return textCrypt;
}

/**
 * Methode permettant de donnée la postion du caractère
 * @param tab
 * @param letter
 * @returns {*[]}
 */
function findInArray(tab, letter) {

    var search = function (element) {
        return element === letter;
    };

    for(var i=0; i<tab.length; i++){
        if(tab[i].find(search)){
            return [i, tab[i].findIndex(search)]
        }
    }
}

/**
 * Retourne le symbole de la lettre
 * @param pos
 * @returns {string}
 */
function symbole(pos) {
    return alphabetCaractSpecial[pos[0]] + alphabetCaractSpecial[pos[1]]
}

/**
 *
 * @param key
 * @param textCrypt
 * @returns {Array}
 */
function transposition(key, textCrypt) {
    var textTransposeFirstStep = addTextCryptToArray(textCrypt, key);

    var keySort = sortCle(key);

    var arrayKey = key.split("");

    var tab = [];

    let letter = [];

    for (var i =0; i<keySort.length; i++){
        if(!Number.isInteger(letter[keySort[i]])){
            letter[keySort[i]] = 0;
        }
        else{
            letter[keySort[i]]++;
        }

        var pos = getAllIndexes(arrayKey, keySort[i]);


        tab.push(textTransposeFirstStep[pos[letter[keySort[i]]]]);

    }

    return tab;
}

/**
 * Permet d'affiché le tableau sous forme texte
 * @param text
 * @returns {string}
 */
function afficheMessageAfterTransposition(text) {
    var message = "";

    let nbCol = text.length;
    let nbLigne = text[0].length;

    for(var a=0; a<nbLigne; a++){
        for(var i=0; i<nbCol; i++){
            message += text[i][a];
        }
    }

    return message;
}