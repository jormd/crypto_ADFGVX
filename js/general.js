const alphabetCaractSpecial = ['-', '#', '+', '*', '%', '.'];
const alphabetNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function crypteMessage() {
    var text = document.getElementById("clear_text").value;
    var key = document.getElementById("key").value;

    console.log('Clé :', key, 'Texte :', text);

    if (checkKey(text, key)) {
        document.getElementById('manage_key').innerHTML = "Clé correcte";
        document.getElementById('manage_key').classList.remove("bad-key");
        document.getElementById('manage_key').classList.add("good-key");

        var substitution = modifyText(text);

        var transpo = transposition(key, substitution);

        document.getElementById("crypted_text").innerHTML = afficheMessageAfterTransposition(transpo);
    } else {
        document.getElementById('manage_key').innerHTML = "Clé incorrecte";
        document.getElementById('manage_key').classList.remove("good-key");
        document.getElementById('manage_key').classList.add("bad-key");

        return console.log('Clé Incorrecte');
    }
}

/**
 * Méthode décryptant un message avec ça clé
 * @param text
 * @param key
 */
function decrypteMessage(text, key) {
    var detrans = detransposition(text, key);

    var desub = desubstitution(detrans);

    return desub;
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
    return ((parseInt(text.length)*2)%(parseInt(key.length)) === 0 && (parseInt(key.length) > 1));
}

/**
 * Méthode permettant de généréle tableau de subtitution avec l'alphabet de 36 caractères
 *
 * @return array
 */
function generateTabSubtitution() {
    var tab = [];
    var compt = 0;

    var alpha = randomTable();

    for (var i=0; i<6; i++){
        tab[i] = [];
        for (var a=0; a<6; a++){
            tab[i].push(alpha[compt]);
            compt ++;
        }
    }

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

