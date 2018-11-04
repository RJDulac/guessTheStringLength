guess.onclick = function () {
    checkGuess();

}
function checkGuess() {
    var str = document.getElementById('string').value;
    var guess = document.getElementById('guess');
    var lengthGuess = document.getElementById('lengthGuess').value;
    var message = document.getElementById('message');

    var res = "The length of the string is: " + str.length + " |";
    if (str.length === Number(lengthGuess)) {
        message.innerText = res + " You got it correct!";
    } else {
        message.innerText = res + " You got it wrong!";
    }
}