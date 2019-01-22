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

function openFile() {

}

/**
 * Permet de cryptanalysé le texte donnée et retourné un ensemble de possibilité
 * @param text
 * @returns {*}
 */
function hackChaine(text, langage) {
    this.doublon = searchDoublon(text);

    this.lengthText = decoupage(text);


    var txt = '';
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.parent = this;
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            txt = xmlhttp.responseText;
            let doublon = xmlhttp.parent.doublon;
            let tabtext = xmlhttp.parent.lengthText;


            var possibility = [];
            let allValue = txt.split('\n');
            for (var i = 0; i<allValue.length; i++){
                if(allValue[i].length === tabtext.length){
                    if(condition(doublon, tabtext, allValue[i])){
                        possibility.push(allValue[i])
                    }
                }
            }
            console.log(possibility);

            return txt;
        }
    };


    xmlhttp.open("GET","dico.txt",true);
    xmlhttp.send();

    return "aa";
}

function condition(doublon, tab, mot) {
    let condition = "";

    for (let x = 0; x < 15; x++){
        if(x<14){
            condition += "(";
        }

        for (let i = 0; i < doublon.length; i++) {
            let multi = false;
            condition += '(';
            for (let a = 0; a < tab.length; a++) {
                if (doublon[i][0] == tab[a]) {
                    if (multi) {
                        condition +='&&';
                    }
                    condition += '(';

                    condition += (mot[a] + '==' + selection(x, frLetterApparition, i));
                    multi = true;
                    condition += ')';

                }
            }
            condition += ')';
        }
        if(x<14){
            condition += ')||';
        }
        else{
            condition += ')';
        }
    }

    return condition
}
