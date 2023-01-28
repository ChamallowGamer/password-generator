
function generer() {
    let lettres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let speciaux = ['.','!','?','%','#','_','-'];
    
    let random1 = Math.floor(Math.random() * 52);
    let random2 = Math.floor(Math.random() * 52);
    let random3 = Math.floor(Math.random() * 52);
    let random4 = Math.floor(Math.random() * 52);
    let random5 = Math.floor(Math.random() * 52);
    let random6 = Math.floor(Math.random() * 52);
    let random7 = Math.floor(Math.random() * 7);
    let random8 = Math.floor(Math.random() * 7);
    let random9 = Math.floor(Math.random(7) * 7);
    let random10 = Math.floor(Math.random(7) * 7);
    let random11 = Math.floor(Math.random(7) * 7);
    let random12 = Math.floor(Math.random(7) * 7);

    let lettreRandom1 = lettres[random1];
    let lettreRandom2 = lettres[random2];
    let lettreRandom3 = lettres[random3];
    let lettreRandom4 = lettres[random4];
    let lettreRandom5 = lettres[random5];
    let lettreRandom6 = lettres[random6];

    let speciauxRandom1 = speciaux[random7];
    let speciauxRandom2 = speciaux[random8];
    let speciauxRandom3 = speciaux[random9];
    let speciauxRandom4 = speciaux[random10];
    let speciauxRandom5 = speciaux[random11];
    let speciauxRandom6 = speciaux[random12];

    let code1 = Math.floor(Math.random(99) * 99);
    let code2 = Math.floor(Math.random(99) * 99);
    let code3 = Math.floor(Math.random(99) * 99);
    let code4 = Math.floor(Math.random(99) * 99);
    let code5 = Math.floor(Math.random(99) * 99);


    let mdp = lettreRandom1 + code1 + speciauxRandom1 + lettreRandom2 + code2 + speciauxRandom2 + lettreRandom3 + code3 + speciauxRandom3 + lettreRandom4 + code4 + speciauxRandom4 + lettreRandom5 + code5 + speciauxRandom5 + lettreRandom6 + speciauxRandom6;
    

    console.log(mdp)
    var text = document.getElementById("mdp");
    text.innerHTML = mdp;
}

//Autheur : Malo Berry