//NÉVSORREND+KOR

console.log(data)

function nevKor() {
    var kor = -99;
    var dtToday = new Date();
    var fullNevKor = [];

    for (var i = 0; i < data.length; i++) {
        var obj = {};
        var szuldate = new Date(data[i].szulido);
        kor = new Date(dtToday - szuldate).getFullYear() - 1970;
        obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
        obj.kor = kor;
        fullNevKor.push(obj);

    }
    return fullNevKor;
}
console.log(nevKor());


//KOR
function kor(item) {
    return new Date(new Date() - new Date(item.szulido)).getFullYear() - 1970;
}
console.log(kor(data[0]));

//3. TELJES NÉV
function teljesNev() {
    var fullName = [];
    for (var i = 0; i < data.length; i++) {
        obj = {};
        obj.fullName = data[i].vezeteknev + ' ' + data[i].utonev;
        fullName.push(obj);
        //fullName.push(data[i].vezeteknev + data[i].utonev);

    }
    return fullName;
}
console.log(teljesNev());

//SZÜLETÉSNAPOK NÉVSORRENDBEN
function szuletesnap() {
    var fullNevSzulinap = [];
    var szulinap = new Date(data[0].szulido);

    for (var i = 0; i < data.length; i++) {
        obj = {};
        obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
        obj.szulinapok = new Date(data[i].szulido);
        fullNevSzulinap.push(obj);
    }
    return fullNevSzulinap;
}
console.log(szuletesnap());

//SZÜLETÉSNAP SZERINTI RENDEZÉS
function korSzerintNovekvo() {
    var lista = szuletesnap();
    for (var i = 0; i < lista.length - 1; i++) {
        for (var j = i + 1; j < lista.length; j++) {
            if (lista[i].szulinapok.getFullYear() < lista[j].szulinapok.getFullYear()) {
                var tmp = [lista[i], lista[j]];
                lista[i] = tmp[1];
                lista[j] = tmp[0];
            }

        }

    }
    return lista;
}
/* if (lista[i].szulinapok.getFullYear() < lista[j].szulinapok.getFullYear()) 
 ha nincs ott a getfullyear, akkor nem rendeződik sorba a Date függvénnyel rendezett szuletési dátum lista*/

console.log(korSzerintNovekvo());


//KÜLFÖLDI JÁTÉKOSOK
function kulfoldi() {
    var kulfoldiek = [];
    for (var i = 0; i < data.length; i++) {
        var obj = {};
        if (data[i].kulfoldi == true) {
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev
            kulfoldiek.push(obj);

        }
    }
    return kulfoldiek;
}
console.log(kulfoldi());

//MAGYAR JÁTÉKOSOK
function magyar() {
    var magyarok = [];
    for (var i = 0; i < data.length; i++) {
        var obj = {};
        if (data[i].magyar == true) {
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev
            magyarok.push(obj);

        }
    }
    return magyarok;
}
console.log(magyar());

//KETTŐS ÁLLAMPOLGÁROK
function kettos() {
    var kettos = [];
    for (var i = 0; i < data.length; i++) {
        var obj = {};
        if (data[i].magyar == true && data[i].kulfoldi == true) {
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev
            kettos.push(obj);

        }
    }
    return kettos;
}
console.log(kettos());

//KLUBOK
function csapatok() {
    var csapat = [];
    for (var i = 0; i < data.length; i++) {
        if (csapat.indexOf(data[i].klub) == -1) {
            csapat.push(data[i].klub);
        }
    }
    return csapat;
}
console.log(csapatok());

//JÁTÉKOSOK KLUBONKÉNT
function jatekosokACsapatokban() {
    var csapatresult = [];
    var csapat = csapatok();
    var jatekos;
    for (var i = 0; i < csapat.length; i++) {
        csapatresult.push({
            name: csapat[i],
            jatekosok: []
        });
    }
    for (var i = 0; i < data.length; i++) {
        jatekos = data[i];
        for (var j = 0; j < csapatresult.length; j++) {
            if (csapatresult[j].name === data[i].klub) {
                csapatresult[j].jatekosok.push(jatekos);
                break;
            }
        }
    }

    return csapatresult;
}
console.log(jatekosokACsapatokban());

//LEGFIATALABB JÁTÉKOS
function MinimumAge() {
    var nk = nevKor();
    var minimum;

    if (nk.length > 0) {
        minimum = nk[0].kor
    }

    for (var i = 1; i < nk.length; i++) {
        if (nk[i].kor < minimum) {
            minimum = nk[i].kor
        }
    }
    return minimum;
}
console.log(MinimumAge());

//LEGMAGASABB JÁTÉKOSÉRTÉK
function legertekesebb() {
    var legertekesebb = data[0].ertek;

    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > legertekesebb) {
            legertekesebb = data[i].ertek;


        }
    }
    return legertekesebb;
}
console.log(legertekesebb());

//KÜLFÖLDI KAPUSOK, AKIK IDŐSEBBEK, MINT();
function kulfoldiKapusokIdosebbMint(atLeastAge) {
    var kulkapus = [];
    for (var i = 0; i < data.length; i++) {

        if (data[i].poszt == "kapus" && data[i].kulfoldi && kor(data[i]) > atLeastAge) {

            kulkapus.push(data[i]);
        }
    }
    return kulkapus;
}
console.log(kulfoldiKapusokIdosebbMint(30));