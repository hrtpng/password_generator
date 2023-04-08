
let array;
let startButton = document.getElementById("start");

startButton.addEventListener("click", showResult)

function randomString() {
    let passwordLengthInput = funcTest();
    if (passwordLengthInput == undefined){
        passwordLengthInput = document.getElementById("password-length-input").value;
    }
    var rnd = '';
    while (rnd.length < passwordLengthInput) 
        rnd += Math.random().toString(36).substring(2);
    let a = rnd.split('');
    console.log(a.slice(0, passwordLengthInput));
    array = a
    return a.slice(0, passwordLengthInput);
};

function funcTest() {
    let length8Password = document.getElementById("Length8symb");
    let length12Password = document.getElementById("Length12symb");
    let length20Password = document.getElementById("Length20symb");

    if (length8Password.checked) {
        let passwordLengthInput = length8Password.value;
        return passwordLengthInput;
    };
    if (length12Password.checked) {
        let passwordLengthInput = length12Password.value;
        return passwordLengthInput;
    };
    if (length20Password.checked) {
        let passwordLengthInput = length20Password.value;
        return passwordLengthInput;
    }
}

let chBoxSpecialSymbols = document.getElementById("ch-box-special-symbols");
let chBoxUpperLetters = document.getElementById("ch-box-upper-letters");
function checkboxes() {
    if (chBoxSpecialSymbols.checked){
        funcSpecialSymbols();
    }
    if (chBoxUpperLetters.checked){
        funcUpperLetters();
    }
}

function funcUpperLetters() {
    let i = 0
    while (i < parseInt(array.length / 3)) {
        i+=1;
        let rand = Math.floor(Math.random() * (array.length - 0)) + 0;
        console.log(rand);
        let uppLet = array[rand].toUpperCase();
        array[rand] = uppLet; 
    } 
console.log(array)
return array 
}

function funcSpecialSymbols() {
    let listSpecialSymbols = [".", ",", "_", "-", "!"];
    let i = 0
    while (i < parseInt(array.length / 3)) {
        i+=1
        let randForPassword = Math.floor(Math.random() * (array.length - 0)) + 0;
        let randForSpecialSymbols = Math.floor(Math.random() * (listSpecialSymbols.length - 0)) + 0;
        array[randForPassword] = listSpecialSymbols[randForSpecialSymbols]
    }
console.log(array)
return array
}

let placeForResult = document.getElementById("place-for-result")

function showResult() {
    randomString();
    checkboxes();
    placeForResult.value = array.join("");
};

let btnCopyResult = document.getElementById("btn-copy-password");

btnCopyResult.addEventListener("click", copyResult);

function copyResult() {
    placeForResult.select();
    document.execCommand("copy");
};
