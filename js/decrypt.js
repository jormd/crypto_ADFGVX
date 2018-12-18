/**
 * Méthode permettant de detransposé par rapport à une clé passée
 * @param text
 * @param cle
 * @returns {Array}
 */
function detransposition(text, cle){
    var textInTab = addTextCryptToArray(text, cle);

    var arrayKey = cle.split("");

    var keySort = sortCle(cle);

    var tab = [];

    for (var i =0; i<arrayKey.length; i++){
        var pos = keySort.findIndex(function (element) {
            return element === arrayKey[i];
        });
        tab.push(textInTab[pos]);
    }

    return tab;
}

/**
 * Passe le tableau en un texte toujours crypter
 * @param tab
 * @returns {string}
 */
function tabToString(tab){
    var text = "";

    let nbCol = tab.length;
    let nbLigne = tab[0].length;

    for(var a=0; a<nbLigne; a++){
        for(var i=0; i<nbCol; i++){
            text += tab[i][a];
        }
    }

    return text;
}

/**
 * Méthode permettant de décrypter le message donnée
 * @param tab
 */
function desubstitution(tab){
    var text = tabToString(tab);

    var tabSubtitution = generateTabSubtitution();

    var result = "";

    for (var a=0; a<text.length; a+=2){
       var ligne = alphabetCaractSpecial.findIndex(function (element) {
           return element === text[a];
       });

       var col = alphabetCaractSpecial.findIndex(function (element) {
           return element === text[a+1];
       });

       result += tabSubtitution[ligne][col];
    }

    return result;
}

