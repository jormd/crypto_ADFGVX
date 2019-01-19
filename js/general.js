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

        document.getElementById('substitution').innerHTML = substitution;

        transpoSimpleHTML(key, substitution);

        var transpo = transposition(key, substitution);

        document.getElementById("crypted_text").innerHTML = afficheMessageAfterTransposition(transpo);
    } else {
        document.getElementById('manage_key').innerHTML = "Clé incorrecte(Entrez une clé divisible par votre texte à crypter différente de vide ou 1)";
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

    document.getElementById("manage_key2").innerHTML = '';

    if(key === '') {
        document.getElementById("manage_key2").innerHTML = 'Entrer une clé valide';
        document.getElementById('manage_key2').classList.add("bad-key");

        return;
     }

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

function transpoSimpleHTML(key, substitution) {

    document.getElementById('transposition_ligne_1').innerHTML = "<td class='horizontal'> Clé originale</td>";
    for (var i=0; i < key.length; i++) {
        document.getElementById('transposition_ligne_1').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + key[i] + "</td>");
    }

    document.getElementById('transposition_ligne_2').innerHTML = "";
    document.getElementById('transposition_ligne_3').innerHTML = "";
    document.getElementById('transposition_ligne_4').innerHTML = "";
    document.getElementById('transposition_ligne_5').innerHTML = "";
    document.getElementById('transposition_ligne_6').innerHTML = "";
    document.getElementById('transposition_ligne_7').innerHTML = "";
    document.getElementById('transposition_ligne_8').innerHTML = "";
    document.getElementById('transposition_ligne_9').innerHTML = "";

    if (key.length === substitution.length) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";
        for (var e=0; e < substitution.length; e++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[e] + "</td>");
        }
    }

    if (key.length === (substitution.length)/2) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var o=0; o < substitution.length/2; o++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[o] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var o2=(substitution.length/2); (o2 >= (substitution.length/2) && o2 < substitution.length); o2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[o2] + "</td>");
        }
    }

    if (key.length === (substitution.length)/3) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var p=0; p < substitution.length/3; p++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[p] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var p2=(substitution.length/3); (p2 >= (substitution.length/3) && p2 < (substitution.length/3 + substitution.length/3)); p2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[p2] + "</td>");
        }

        document.getElementById('transposition_ligne_4').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var p3=(substitution.length/3 + substitution.length/3); (p3 >= (substitution.length/3 + substitution.length/3) && p3 < substitution.length); p3++) {
            document.getElementById('transposition_ligne_4').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[p3] + "</td>");
        }
    }

    if (key.length === (substitution.length)/4) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var q=0; q < substitution.length/4; q++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[q] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var q2=(substitution.length/4); (q2 >= (substitution.length/4) && q2 < (substitution.length/2)); q2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[q2] + "</td>");
        }

        document.getElementById('transposition_ligne_4').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var q3=(substitution.length/2); (q3 >= (substitution.length/2) && q3 < ((substitution.length/2) + (substitution.length/4))); q3++) {
            document.getElementById('transposition_ligne_4').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[q3] + "</td>");
        }

        document.getElementById('transposition_ligne_5').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var q4=((substitution.length/2) + (substitution.length/4)); (q4 >= ((substitution.length/2) + (substitution.length/4)) && q4 < substitution.length); q4++) {
            document.getElementById('transposition_ligne_5').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[q4] + "</td>");
        }
    }

    if (key.length === (substitution.length)/5) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var x=0; x < substitution.length/5; x++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[x] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var x2=(substitution.length/5); (x2 >= (substitution.length/5) && x2 < (substitution.length/5 + substitution.length/5)); x2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[x2] + "</td>");
        }

        document.getElementById('transposition_ligne_4').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var x3=(substitution.length/5 + substitution.length/5); (x3 >= (substitution.length/5 + substitution.length/5) && x3 < (substitution.length/5 + substitution.length/5 + substitution.length/5)); x3++) {
            document.getElementById('transposition_ligne_4').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[x3] + "</td>");
        }

        document.getElementById('transposition_ligne_5').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var x4=(substitution.length/5 + substitution.length/5 + substitution.length/5); (x4 >= ((substitution.length/5 + substitution.length/5 + substitution.length/5)) && x4 < (substitution.length - substitution.length/5)); x4++) {
            document.getElementById('transposition_ligne_5').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[x4] + "</td>");
        }

        document.getElementById('transposition_ligne_6').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var x5=(substitution.length - substitution.length/5); (x5 >= (substitution.length - substitution.length/5) && x5 < (substitution.length)); x5++) {
            document.getElementById('transposition_ligne_6').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[x5] + "</td>");
        }
    }

    if (key.length === (substitution.length)/6) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var j=0; j < substitution.length/6; j++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[j] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var j2=(substitution.length/6); (j2 >= (substitution.length/6) && j2 < (substitution.length/6 + substitution.length/6)); j2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[j2] + "</td>");
        }

        document.getElementById('transposition_ligne_4').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var j3=(substitution.length/6 + substitution.length/6); (j3 >= (substitution.length/6 + substitution.length/6) && j3 < (substitution.length/6 + substitution.length/6 + substitution.length/6)); j3++) {
            document.getElementById('transposition_ligne_4').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[j3] + "</td>");
        }

        document.getElementById('transposition_ligne_5').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var j4=(substitution.length/6 + substitution.length/6 + substitution.length/6); (j4 >= ((substitution.length/6 + substitution.length/6 + substitution.length/6)) && j4 < (substitution.length/6 + substitution.length/6 + substitution.length/6 + substitution.length/6)); j4++) {
            document.getElementById('transposition_ligne_5').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[j4] + "</td>");
        }

        document.getElementById('transposition_ligne_6').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var j5=(substitution.length/6 + substitution.length/6 + substitution.length/6 + substitution.length/6); (j5 >= (substitution.length/6 + substitution.length/6 + substitution.length/6 + substitution.length/6) && j5 < (substitution.length - substitution.length/6)); j5++) {
            document.getElementById('transposition_ligne_6').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[j5] + "</td>");
        }

        document.getElementById('transposition_ligne_7').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var j6=(substitution.length - substitution.length/6); (j6 >= (substitution.length - substitution.length/6) && j6 < (substitution.length)); j6++) {
            document.getElementById('transposition_ligne_7').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[j6] + "</td>");
        }
    }

    if (key.length === (substitution.length)/7) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u=0; u < substitution.length/7; u++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u2=(substitution.length/7); (u2 >= (substitution.length/7) && u2 < (2*(substitution.length/7))); u2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u2] + "</td>");
        }

        document.getElementById('transposition_ligne_4').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u3=(2*(substitution.length/7)); (u3 >= (2*(substitution.length/7)) && u3 < (3*(substitution.length/7))); u3++) {
            document.getElementById('transposition_ligne_4').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u3] + "</td>");
        }

        document.getElementById('transposition_ligne_5').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u4=(3*(substitution.length/7)); (u4 >= (3*(substitution.length/7)) && u4 < (4*(substitution.length/7))); u4++) {
            document.getElementById('transposition_ligne_5').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u4] + "</td>");
        }

        document.getElementById('transposition_ligne_6').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u5=(4*(substitution.length/7)); (u5 >= (4*(substitution.length/7)) && u5 < (5*(substitution.length/7))); u5++) {
            document.getElementById('transposition_ligne_6').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u5] + "</td>");
        }

        document.getElementById('transposition_ligne_7').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u6=(5*(substitution.length/7)); (u6 >= (5*(substitution.length/7)) && u6 < (substitution.length - substitution.length/7)); u6++) {
            document.getElementById('transposition_ligne_7').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u6] + "</td>");
        }

        document.getElementById('transposition_ligne_8').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var u7=(substitution.length - substitution.length/7); (u7 >= (substitution.length - substitution.length/7) && u7 < (substitution.length)); u7++) {
            document.getElementById('transposition_ligne_8').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[u7] + "</td>");
        }
    }

    if (key.length === (substitution.length)/8) {
        document.getElementById('transposition_ligne_2').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w=0; w < substitution.length/8; w++) {
            document.getElementById('transposition_ligne_2').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w] + "</td>");
        }
        document.getElementById('transposition_ligne_3').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w2=(substitution.length/8); (w2 >= (substitution.length/8) && w2 < (2*(substitution.length/8))); w2++) {
            document.getElementById('transposition_ligne_3').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w2] + "</td>");
        }

        document.getElementById('transposition_ligne_4').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w3=(2*(substitution.length/8)); (w3 >= (2*(substitution.length/8)) && w3 < (3*(substitution.length/8))); w3++) {
            document.getElementById('transposition_ligne_4').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w3] + "</td>");
        }

        document.getElementById('transposition_ligne_5').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w4=(3*(substitution.length/8)); (w4 >= (3*(substitution.length/8)) && w4 < (4*(substitution.length/8))); w4++) {
            document.getElementById('transposition_ligne_5').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w4] + "</td>");
        }

        document.getElementById('transposition_ligne_6').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w5=(4*(substitution.length/8)); (w5 >= (4*(substitution.length/8)) && w5 < (5*(substitution.length/8))); w5++) {
            document.getElementById('transposition_ligne_6').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w5] + "</td>");
        }

        document.getElementById('transposition_ligne_7').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w6=(5*(substitution.length/8)); (w6 >= (5*(substitution.length/8)) && w6 < (6*(substitution.length/8))); w6++) {
            document.getElementById('transposition_ligne_7').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w6] + "</td>");
        }

        document.getElementById('transposition_ligne_8').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w7=(6*(substitution.length/8)); (w7 >= (6*(substitution.length/8)) && w7 < (substitution.length - substitution.length/8)); w7++) {
            document.getElementById('transposition_ligne_8').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w7] + "</td>");
        }

        document.getElementById('transposition_ligne_9').innerHTML = "<td class='horizontal'> Message codé</td>";

        for (var w8=(substitution.length - substitution.length/8); (w8 >= (substitution.length - substitution.length/8) && w8 < substitution.length); w8++) {
            document.getElementById('transposition_ligne_9').insertAdjacentHTML('beforeend', "<td class='vertical horizontal'>" + substitution[w8] + "</td>");
        }
    }
}