/**
 * Méthode permettant de généréle tableau de subtitution avec l'alphabet de 36 caractères
 *
 * @return array
 */
function generateTabSubtitution() {
    var tab = [];
    var compt = 0;

    for (var i=0; i<6; i++){
        tab[i] = [];
        for (var a=0; a<6; a++){
            tab[i].push(alphabetNum[compt]);
            compt ++;
        }
    }

    return tab;
}

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
    console.log(keySort);

    var arrayKey = key.split("");

    var tab = [];

    for (var i =0; i<keySort.length; i++){
        var pos = arrayKey.findIndex(function (element) {
            return element === keySort[i];
        });
        tab.push(textTransposeFirstStep[pos]);
    }
console.log(tab);
    return tab;
}

/**
 * Ajout du text crypter dans le tableau par rapport à la clé donnée
 * @param text
 * @param key
 * @returns {Array}
 */
function addTextCryptToArray(text, key) {
    var tab = [];
    var length = text.length/key.length;
    var compt = 0;

    for(var a=0; a<key.length; a++){
        tab[a] = [];
        for(var i=0; i<length; i++){
            tab[a].push(text[compt]);
            compt++;
        }
    }

    return tab;
}

/**
 * Ordonne les chiffres avant les lettres
 * @param cle
 * @returns {T[] | string}
 */
function sortCle(cle) {
    var tabNumber = cle.match(/[0-9]/g);
    var tabString = cle.match(/[a-zA-Z]/g);

    if (tabString) {
        tabString.sort();
    }

    if(tabNumber) {
        tabNumber.sort(function (a, b) {
            return a - b;

        });

        if(tabString) {
            return tabNumber.concat(tabString);
        }

        return tabNumber;
    }

    return tabString;
}


function afficheMessageAfterTransposition(text) {
    var message = "";

    for(var a=0; a<text.length; a++){
        for(var i=0; i<text[a].length; i++){
            message += text[a][i];
        }
    }

    return message;
}