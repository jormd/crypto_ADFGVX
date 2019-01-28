const frLetterApparition = ['e', 'a', 'i', 's', 'n', 'r', 't', 'o', 'l', 'u', 'd', 'c', 'm', 'p', 'g', 'b', 'v', 'h', 'f', 'q', 'y', 'x', 'j', 'k', 'w', 'z'];
const enLetterApparition = ['e', 't', 'a', 'o', 'n', 'i', 's', 'r', 'h', 'l', 'd', 'c', 'u', 'm', 'f', 'p', 'w', 'g', 'b', 'y', 'v', 'k', 'x', 'j', 'q', 'z'];


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
        for(let a = i+1; a<tab.length; a++){
            if(tab[i] === tab[a]){
                let existing = false;
                for(let y = 0; y<doublon.length; y++){
                    if(doublon[y][0] === tab[i]){
                        doublon[y][1].push(i);
                        existing = true;
                    }
                }
                if(!existing){
                    doublon[compt] = [];
                    doublon[compt][0] = tab[i];
                    doublon[compt][1] = [];
                    doublon[compt][1].push(i);
                    doublon[compt][1].push(a);
                    compt++;
                }
            }

        }
    }

    return doublon;
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

    if(pos < 26){

        if(index === 0){
            return alphabat[index]
        }

        return alphabat[(index)]

    }else if(pos < 50){

        if(index === 0){
            return alphabat[index+1]
        }

        return alphabat[(index+1)]

    }else if (pos < 73){

        if(index === 0){
            return alphabat[index+2]
        }

        return alphabat[(index+2)]

    }else if (pos < 95){
        if(index === 0){
            return alphabat[index+3]
        }
        return alphabat[(index+3)]
    }else if (pos < 116){
        if(index === 0){
            return alphabat[index+4]
        }
        return alphabat[(index+4)]
    }else if (pos < 136){
        if(index === 0){
            return alphabat[index+5]
        }
        return alphabat[(index+4)]
    }else if (pos < 155){
        if(index === 0){
            return alphabat[index+6]
        }
        return alphabat[(index+6)]
    }else if (pos < 173){
        if(index === 0){
            return alphabat[index+7]
        }
        return alphabat[(index+7)]
    }else if (pos < 190){
        if(index === 0){
            return alphabat[index+8]
        }
        return alphabat[(index+8)]
    }else if (pos < 206){
        if(index === 0){
            return alphabat[index+9]
        }
        return alphabat[(index+9)]
    }else if (pos < 221){
        if(index === 0){
            return alphabat[index+10]
        }
        return alphabat[(index+10)]
    }else if (pos < 235){
        if(index === 0){
            return alphabat[index+11]
        }
        return alphabat[(index+11)]
    }else if (pos < 248){
        if(index === 0){
            return alphabat[index+12]
        }
        return alphabat[(index+12)]
    }
    else if(pos < 260){
        if(index === 0){
            return alphabat[index+13]
        }
        return alphabat[(index+13)]
    }else if(pos < 271){
        if(index === 0){
            return alphabat[index+14]
        }
        return alphabat[(index+14)]
    }else if(pos < 281){
        if(index === 0){
            return alphabat[index+15]
        }
        return alphabat[(index+15)]
    }else if(pos < 290){
        if(index === 0){
            return alphabat[index+16]
        }
        return alphabat[(index+16)]
    }else if(pos < 298){
        if(index === 0){
            return alphabat[index+17]
        }
        return alphabat[(index+17)]
    }else if(pos < 305){
        if(index === 0){
            return alphabat[index+18]
        }
        return alphabat[(index+18)]
    }else if(pos < 311){
        if(index === 0){
            return alphabat[index+19]
        }
        return alphabat[(index+19)]
    }else if(pos < 316){
        if(index === 0){
            return alphabat[index+20]
        }
        return alphabat[(index+20)]
    }else if(pos < 320){
        if(index === 0){
            return alphabat[index+21]
        }
        return alphabat[(index+21)]
    }else if(pos < 323){
        if(index === 0){
            return alphabat[index+22]
        }
        return alphabat[(index+22)]
    }else if(pos < 325){
        if(index === 0){
            return alphabat[index+23]
        }
        return alphabat[(index+23)]
    }else if(pos < 326){
        if(index === 0){
            return alphabat[index+24]
        }
        return alphabat[(index+24)]
    }

    return false;
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
                    let good = [];

                    let mot = allValue[i];
let notTouch = [];

                    for(let a=0; a < doublon.length; a++){
                        let value = doublon[a][1];
                        if(value > 2){
                            if(mot[(value[0])] === mot[(value[1])] && mot[(value[0])] === mot[(value[2])]){
                                notTouch.push(value[0])
                                notTouch.push(value[1])
                                notTouch.push(value[2])
                                good.push(true);
                            }
                            else{
                                good.push(false);
                            }
                        }
                        else{
                            if(mot[(value[0])] === mot[(value[1])]){
                                notTouch.push(value[0])
                                notTouch.push(value[1])
                                good.push(true);
                            }
                            else{
                                good.push(false);
                            }
                        }

                    }

                    for(let b=0; b < mot.length; b++){
                        for(let u=b+1; u < mot.length; u++){
                            if(mot[b] !== mot[u]){
                                good.push(true);
                            }
                            else{

                                let enter =  false;

                                for(let a=0; a < doublon.length; a++) {
                                    let value = doublon[a][1];


                                    if(value.find(function(element) { return element === b }) !== undefined || value.find(function(element) { return element === u }) !== undefined){
                                        enter = true;
                                    }
                                }


                                if(enter){
                                    good.push(true);
                                }
                                else{
                                    good.push(false);

                                }

                            }
                        }
                    }

                    let yes = true;

                    for(var y = 0; y< good.length; y++){
                        if(!good[y]){
                            yes = false;
                        }
                    }

                    if(yes){
                        possibility.push(mot);
                    }


                    // if(condition2(doublon, tabtext, allValue[i].toString().toLowerCase(), langage)){
                    //     possibility.push(allValue[i])
                    // }
                }
            }

            var textarea = document.getElementById("decryptanalyse_text");
            textarea.innerHTML = possibility.join(", ");
            document.getElementById("decryptanalyse_long").innerHTML = "Mot(s) trouvé(s) : "+possibility.length;

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


function condition2(doublon, tab, mot, langage) {
    let result = [];
    let except = [];
    let letter = [];

    let tabest = [];

    for (let x = 0; x < 325; x++){
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



                    if(mot[a] === select){
                        yes = true;

                        if(letter.find(function(element) { return element ===  select}) === undefined){
                            letter.push(select);
                        }

                        if(except.find(function(element) { return element === a }) === undefined){
                            except.push(a);
                        }

                        for(var h = 0; h < tab.length; h++){
                            if(tabest[h] !== undefined){
                                if(tabest[h][0] === select){
                                    tabest[h][1].push(a);
                                }
                            }
                            else{
                                tabest.push([]);
                                tabest[tabest.length-1][0] = select;
                                tabest[tabest.length-1][1] = [];
                                tabest[tabest.length-1][1].push(a);
                            }

                        }

                    }
                    else{
                        yes = false;
                    }
                }
            }
            result.push(yes);

        }
    }

    if(result.find(function(element) { return element === true; })){
        return true;
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

        // for(let l = 0; l < tabest.length; l++){
        //     let oui = false;
        //     for(let b = 0; b < tabest[l][1].length; b++){
        //         if(b+1 < tabest[l][1].length){
        //             if(mot[tabest[l][1][b]] === mot[tabest[l][1][b+1]]){
        //                 oui = true;
        //             }
        //             else{
        //                 oui = false;
        //             }
        //         }
        //
        //         if(mot[tabest[l][1][b]] !== tabest[l][0]){
        //             oui = false;
        //         }
        //         good.push(oui);
        //
        //     }
        // }

        let yes = true;

        for(var y = 0; y< good.length; y++){
            if(!good[y]){
                yes = false;
            }
        }

        return yes;
    }

    return false;
}
