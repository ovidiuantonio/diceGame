var input = prompt("Do you want to play the game? (Y/N)");

if(input == "Y" || input == "y") {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var diceImage = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", diceImage);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var diceImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", diceImage2);

    if(randomNumber1 > randomNumber2) {
       document.querySelector("h1").innerText = "🏆 Player 1 Wins!";
    } else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText = "Player 2 Wins! 🏆";
    } else {
      document.querySelector("h1").innerText = "Draw!";
    }
} else if(input == "N" || input == "n") {
    alert("Ok, no problem, maybe next time!");
} else {
    alert("Please enter a valid input!");
}