const alphabetCaractSpecial = ['-', '#', '+', '*', '%', '.'];
const alphabetNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

   console.log(textCrypt);
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



function checkKey(text, key) {
    return ((parseInt(text.length)*2)%(parseInt(key.length)) === 0 && key > 1);
}



