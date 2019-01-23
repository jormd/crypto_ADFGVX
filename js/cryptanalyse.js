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
                    for(let y = 0; y<doublon.length; y++){
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
    for (let i = 0; i < doublon.length; i++){
        if(i+1 < doublon.length){
            if(doublon[i+1][1] > doublon[i][1]){
                let tmp = doublon[i];
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


    let txt = '';
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.parent = this;
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            txt = xmlhttp.responseText;
            let doublon = xmlhttp.parent.doublon;
            let tabtext = xmlhttp.parent.lengthText;


            let possibility = [];
            let allValue = txt.split('\n');




            for (let i = 0; i<allValue.length; i++){
                if(allValue[i].length === tabtext.length){

                    if(condition2(doublon, tabtext, allValue[i].toString().toLowerCase(), langage)){
                        possibility.push(allValue[i])
                    }
                }
            }
            console.log(possibility);

            return txt;
        }
    };

    if(langage === "fr"){
        xmlhttp.open("GET","dico.txt",true);
    }
    else if(langage === "en"){
        xmlhttp.open("GET","dicoEn.txt",true);
    }

    xmlhttp.send();

    return "aa";
}

/**
 *
 * @param doublon
 * @param tab
 * @param {string} mot
 * @returns {string}
 */
function condition(doublon, tab, mot, langage) {
    let condition = '';

    for (let x = 0; x < 15; x++){

        for (let i = 0; i < doublon.length; i++) {
            let multi = false;
            if(i>0){
                condition += '&&';
            }
            condition += '(';
            for (let a = 0; a < tab.length; a++) {
                if (doublon[i][0] === tab[a]) {
                    if (multi) {
                        condition +='&&';
                    }
                    condition += '(';

                    condition += mot +'['+a+']' + '==' + selection(x, frLetterApparition, i);
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

    // for(var y = 0; y<mot.length; y++){
    //     for(var u=y+1; u<mot.length;u++ ){
    //         condition += '&& ('+mot+'['+y+']' +' != '+ mot+'['+u+'] )'
    //     }
    // }

    return condition
}

function condition2(doublon, tab, mot, langage) {
    let result = [];
    let except = [];
    let letter = [];

    for (let x = 0; x < 15; x++){
        let yes = false;

        for (let i = 0; i < doublon.length; i++) {

            for (let a = 0; a < tab.length; a++) {
                if (doublon[i][0] === tab[a]) {

                    let select = "";

                    if(langage === "fr"){
                        select = selection(x, frLetterApparition, i);
                    }
                    else if(langage === "en"){
                        select = selection(x, enLetterApparition, i);
                    }

                    if(except.find(function(element) { return element === a }) === undefined){
                        except.push(a);
                    }

                    if(letter.find(function(element) { return element ===  select}) === undefined){
                        letter.push(select);
                    }

                    if(mot[a] === select){
                        yes = true;
                    }
                    else{
                        yes = false;
                    }
                }
            }

        }
        result.push(yes);
    }

    if(result.find(function(element) { return element === true; })){
        let good =  [];

        for (let y = 0; y < mot.length; y++){
            for(let q = y+1; q < mot.length; q++){
                if(mot[y] !== mot[q]){
                    if((except.find(function(element) { return element === y }) !== undefined)){
                        let yes = false;
                        for (let t = 0; t < letter.length; t++){
                            if(mot[y] === letter[t]){
                                yes = true;
                            }
                        }

                        if(yes){
                            good.push(true);
                        }
                        else {
                            good.push(false);
                        }
                    }
                    else if((except.find(function(element) { return element === q }) !== undefined )){
                        let yes = false;
                        for (let t = 0; t < letter.length; t++){
                            if(mot[q] === letter[t]){
                                yes = true;
                            }
                        }

                        if(yes){
                            good.push(true);
                        }
                        else {
                            good.push(false);
                        }
                    }
                    else{
                        good.push(true);
                    }
                }
                else if((except.find(function(element) { return element === y }) !== undefined) &&
                    (except.find(function(element) { return element === q }) !== undefined )
                ){
                    let yes = false;
                    for (let t = 0; t < letter.length; t++){
                        if(mot[y] === letter[t] && mot[q] === letter[t]){
                            yes = true;
                        }
                    }

                    if(yes){
                        good.push(true);
                    }
                    else {
                        good.push(false);
                    }
                }
                else{
                    good.push(false);
                }
            }
        }

        // for(let z = 0; z < doublon.length; z++){
        //     let oui = false;
        //     for(let u = 0; u < letter.length; u++){
        //         let regex = new RegExp(letter[u], "g");
        //
        //         if((mot.match(regex) || []).length === doublon[z][1]){
        //             oui = true;
        //         }
        //     }
        //     good.push(oui);
        // }

        return good.find(function(element) { return element === false; }) === undefined;
    }

    return false;
}
