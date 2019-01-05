const alphabetCaractSpecial = ['-', '#', '+', '*', '%', '.'];
const alphabetNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function crypteMessage() {
    var text = document.getElementById("clear_text").value;
    var key = document.getElementById("key").value;

    //permet de gérer les majuscule, on les met directement en minuscule
    text = text.toLowerCase().replace(/[" "]/g, "");
    if(key instanceof String){
        key = key.toLowerCase();

    }

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
function decrypteMessage() {
     var text = document.getElementById("crypte_text").value;
     var key = document.getElementById("key_decrypt").value;

    var detrans = detransposition(text, key);



    var desub = desubstitution(detrans);

    document.getElementById("decrypted_text").innerHTML = desub;

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
 * Méthode permettant de généré le tableau de subtitution avec l'alphabet de 36 caractères
 *
 * @return array
 */
function generateTabSubtitution() {
    var tab = [];
    var compt = 0;

    var alpha = randomTable();

    document.getElementsByClassName("case1")[0].innerHTML = alpha[0];
    document.getElementsByClassName("case2")[0].innerHTML = alpha[1];
    document.getElementsByClassName("case3")[0].innerHTML = alpha[2];
    document.getElementsByClassName("case4")[0].innerHTML = alpha[3];
    document.getElementsByClassName("case5")[0].innerHTML = alpha[4];
    document.getElementsByClassName("case6")[0].innerHTML = alpha[5];
    document.getElementsByClassName("case7")[0].innerHTML = alpha[6];
    document.getElementsByClassName("case8")[0].innerHTML = alpha[7];
    document.getElementsByClassName("case9")[0].innerHTML = alpha[8];
    document.getElementsByClassName("case10")[0].innerHTML = alpha[9];
    document.getElementsByClassName("case11")[0].innerHTML = alpha[10];
    document.getElementsByClassName("case12")[0].innerHTML = alpha[11];
    document.getElementsByClassName("case13")[0].innerHTML = alpha[12];
    document.getElementsByClassName("case14")[0].innerHTML = alpha[13];
    document.getElementsByClassName("case15")[0].innerHTML = alpha[14];
    document.getElementsByClassName("case16")[0].innerHTML = alpha[15];
    document.getElementsByClassName("case17")[0].innerHTML = alpha[16];
    document.getElementsByClassName("case18")[0].innerHTML = alpha[17];
    document.getElementsByClassName("case19")[0].innerHTML = alpha[18];
    document.getElementsByClassName("case20")[0].innerHTML = alpha[19];
    document.getElementsByClassName("case21")[0].innerHTML = alpha[20];
    document.getElementsByClassName("case22")[0].innerHTML = alpha[21];
    document.getElementsByClassName("case23")[0].innerHTML = alpha[22];
    document.getElementsByClassName("case24")[0].innerHTML = alpha[23];
    document.getElementsByClassName("case25")[0].innerHTML = alpha[24];
    document.getElementsByClassName("case26")[0].innerHTML = alpha[25];
    document.getElementsByClassName("case27")[0].innerHTML = alpha[26];
    document.getElementsByClassName("case28")[0].innerHTML = alpha[27];
    document.getElementsByClassName("case29")[0].innerHTML = alpha[28];
    document.getElementsByClassName("case30")[0].innerHTML = alpha[29];
    document.getElementsByClassName("case31")[0].innerHTML = alpha[30];
    document.getElementsByClassName("case32")[0].innerHTML = alpha[31];
    document.getElementsByClassName("case33")[0].innerHTML = alpha[32];
    document.getElementsByClassName("case34")[0].innerHTML = alpha[33];
    document.getElementsByClassName("case35")[0].innerHTML = alpha[34];
    document.getElementsByClassName("case36")[0].innerHTML = alpha[35];

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

        for(var i=0; i<length; i++){
            for(var a=0; a<key.length; a++){
                if(!Array.isArray(tab[a])){
                    tab[a] = [];
                }
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

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}