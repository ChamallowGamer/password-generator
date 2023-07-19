function generate() {
    if(document.getElementById("length").value < 8 || document.getElementById("length").value > 32)return alert("Le nombre de caractères doit être compris entre 8 et 32!")
    function generatePassword() {
        let caracters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","?",",",".",";",":","/","!","=","+","@","^","-","#","&","1","2","3","4","5","6","7","8","9","0"]

        function randomChar() {
            return caracters[Math.floor(Math.random() * caracters.length)]
        }

        let password = randomChar();

        while(password.length != document.getElementById("length").value){
            password = password+randomChar()
        }
        console.log("Point 1")
        console.log(password)
        if(password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7")|| password.includes("8") || password.includes("9")){
            console.log("Verification one succesfuly")
            let SpecialCaractersInPassword = false;
            let SpecialCaracters = ["?",",",".",";",":","/","!","=","+","@","^","-","#","&"]
            let i = 0;
            while(SpecialCaractersInPassword === false){
                if(password.includes(SpecialCaracters[i])){
                    SpecialCaractersInPassword = true;
                    console.log("Verification is finish")
                    
                    const input = document.getElementById("password");
                    input.innerHTML = password;
                }else{
                    i++
                }
                
            }
            
        }else{
            generate()
        }

    }
    generatePassword()
}

function copy() {
    const password = document.getElementById("password")
    navigator.clipboard.writeText(password.innerHTML)
}

navigator.language