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
 * Vérification de la clé passer par l'utilisateur
 * @param text
 * @param key
 * @returns {boolean}
 */
function checkKey(text, key) {
    return ((parseInt(text.length)*2)%(parseInt(key.length)) === 0 && (parseInt(key.length) > 1));
}

