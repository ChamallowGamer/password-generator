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

function generer3() {
    let lettres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let speciaux = ['.','!','?','%','#','_','-'];
    
    //mdp1
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

    //mdp2
    let random1a = Math.floor(Math.random() * 52);
    let random2a = Math.floor(Math.random() * 52);
    let random3a = Math.floor(Math.random() * 52);
    let random4a = Math.floor(Math.random() * 52);
    let random5a = Math.floor(Math.random() * 52);
    let random6a = Math.floor(Math.random() * 52);
    let random7a = Math.floor(Math.random() * 7);
    let random8a = Math.floor(Math.random() * 7);
    let random9a = Math.floor(Math.random(7) * 7);
    let random10a = Math.floor(Math.random(7) * 7);
    let random11a = Math.floor(Math.random(7) * 7);
    let random12a = Math.floor(Math.random(7) * 7);

    //mdp3
    let random1b = Math.floor(Math.random() * 52);
    let random2b = Math.floor(Math.random() * 52);
    let random3b = Math.floor(Math.random() * 52);
    let random4b = Math.floor(Math.random() * 52);
    let random5b = Math.floor(Math.random() * 52);
    let random6b = Math.floor(Math.random() * 52);
    let random7b = Math.floor(Math.random() * 7);
    let random8b = Math.floor(Math.random() * 7);
    let random9b = Math.floor(Math.random(7) * 7);
    let random10b = Math.floor(Math.random(7) * 7);
    let random11b = Math.floor(Math.random(7) * 7);
    let random12b = Math.floor(Math.random(7) * 7);

    //mdp1
    let lettreRandom1 = lettres[random1];
    let lettreRandom2 = lettres[random2];
    let lettreRandom3 = lettres[random3];
    let lettreRandom4 = lettres[random4];
    let lettreRandom5 = lettres[random5];
    let lettreRandom6 = lettres[random6];

    //mdp2
    let lettreRandom1a = lettres[random1a];
    let lettreRandom2a = lettres[random2a];
    let lettreRandom3a = lettres[random3a];
    let lettreRandom4a = lettres[random4a];
    let lettreRandom5a = lettres[random5a];
    let lettreRandom6a = lettres[random6a];

    //mdp3
    let lettreRandom1b = lettres[random1b];
    let lettreRandom2b = lettres[random2b];
    let lettreRandom3b = lettres[random3b];
    let lettreRandom4b = lettres[random4b];
    let lettreRandom5b = lettres[random5b];
    let lettreRandom6b = lettres[random6b];
    
    //mdp1
    let speciauxRandom1 = speciaux[random7];
    let speciauxRandom2 = speciaux[random8];
    let speciauxRandom3 = speciaux[random9];
    let speciauxRandom4 = speciaux[random10];
    let speciauxRandom5 = speciaux[random11];
    let speciauxRandom6 = speciaux[random12];

    //mdp2
    let speciauxRandom1a = speciaux[random7a];
    let speciauxRandom2a = speciaux[random8a];
    let speciauxRandom3a = speciaux[random9a];
    let speciauxRandom4a = speciaux[random10a];
    let speciauxRandom5a = speciaux[random11a];
    let speciauxRandom6a = speciaux[random12a];
    
    //mdp3
    let speciauxRandom1b = speciaux[random7b];
    let speciauxRandom2b = speciaux[random8b];
    let speciauxRandom3b = speciaux[random9b];
    let speciauxRandom4b = speciaux[random10b];
    let speciauxRandom5b = speciaux[random11b];
    let speciauxRandom6b = speciaux[random12b];

    //mdp1
    let code1 = Math.floor(Math.random(99) * 99);
    let code2 = Math.floor(Math.random(99) * 99);
    let code3 = Math.floor(Math.random(99) * 99);
    let code4 = Math.floor(Math.random(99) * 99);
    let code5 = Math.floor(Math.random(99) * 99);

    //mdp2
    let code1a = Math.floor(Math.random(99) * 99);
    let code2a = Math.floor(Math.random(99) * 99);
    let code3a = Math.floor(Math.random(99) * 99);
    let code4a = Math.floor(Math.random(99) * 99);
    let code5a = Math.floor(Math.random(99) * 99);

    //mdp3
    let code1b = Math.floor(Math.random(99) * 99);
    let code2b = Math.floor(Math.random(99) * 99);
    let code3b = Math.floor(Math.random(99) * 99);
    let code4b = Math.floor(Math.random(99) * 99);
    let code5b = Math.floor(Math.random(99) * 99);


    let mdp1 = lettreRandom1 + code1 + speciauxRandom1 + lettreRandom2 + code2 + speciauxRandom2 + lettreRandom3 + code3 + speciauxRandom3 + lettreRandom4 + code4 + speciauxRandom4 + lettreRandom5 + code5 + speciauxRandom5 + lettreRandom6 + speciauxRandom6;
    let mdp2 = lettreRandom1a + code1a + speciauxRandom1a + lettreRandom2a + code2a + speciauxRandom2a + lettreRandom3a + code3a + speciauxRandom3a + lettreRandom4a + code4a + speciauxRandom4a + lettreRandom5a + code5a + speciauxRandom5a + lettreRandom6a + speciauxRandom6a;
    let mdp3 = lettreRandom1b + code1b + speciauxRandom1b + lettreRandom2b + code2b + speciauxRandom2b + lettreRandom3b + code3b + speciauxRandom3b + lettreRandom4b + code4b + speciauxRandom4b + lettreRandom5b + code5b + speciauxRandom5b + lettreRandom6b + speciauxRandom6b;
    

    console.log(mdp)
    var text = document.getElementById("mdp");
    text.innerHTML = mdp1 + "<br><br>" + mdp2 + "<br><br>" + mdp3;
}

function copier() {
    var text = document.getElementById("mdp");
    navigator.clipboard.writeText(text.innerHTML)
}

//Autheur : Malo Berry