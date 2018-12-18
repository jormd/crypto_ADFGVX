const alphabetCaractSpecial = ['-', '#', '+', '*', '%', '.'];
const alphabetNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * Méthode cryptant le text avec le principe de ADFGVX
 * @param text
 * @param key
 */
function crypteMessage(text, key) {
    var substitution = modifyText(text);

    var transpo = transposition(key, substitution);

    return afficheMessageAfterTransposition(transpo);
}


function randomTable() {
    var tab = [];

    var a = alphabetNum.slice(0, 5);
    var b = alphabetNum.slice(5, 14);
    var c = alphabetNum.slice(14, 20);
    var d = alphabetNum.slice(20, 27);
    var f = alphabetNum.slice(27, 36);

    return d.concat(b,f,a,c);
}

/**
 * Vérification de la clé passer par l'utilisateur
 * @param text
 * @param key
 * @returns {boolean}
 */
function checkKey(text, key) {
    return ((parseInt(text.length)*2)%(parseInt(key.length)) === 0 && key > 1);
}

