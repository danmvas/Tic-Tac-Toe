var i, j;

//////////////////////////////////////////////////////////////
// MUDAR DE JOGADOR!
player = "X"
bot = "O"
var newGameButton = document.getElementById("changeSymbol")
function changeSymbol() {
    player = "O"
    bot = "X"
} newGameButton.addEventListener("click", changeSymbol)

// botoezitos pra clicar!
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")
var c5 = document.getElementById("c5")
var c6 = document.getElementById("c6")
var c7 = document.getElementById("c7")
var c8 = document.getElementById("c8")
var c9 = document.getElementById("c9")

function game() {
    gaming(0, 0, player, c1)
} c1.addEventListener("click", game)

function game() {
    gaming(0, 1, player, c2)
} c2.addEventListener("click", game)

function game() {
    gaming(0, 2, player, c3)
} c3.addEventListener("click", game)

function game() {
    gaming(1, 0, player, c4)
} c4.addEventListener("click", game)

function game() {
    gaming(1, 1, player, c5)
} c5.addEventListener("click", game)

function game() {
    gaming(1, 2, player, c6)
} c6.addEventListener("click", game)

function game() {
    gaming(2, 0, player, c7)
} c7.addEventListener("click", game)

function game() {
    gaming(2, 1, player, c8)
} c8.addEventListener("click", game)

function game() {
    gaming(2, 2, player, c9)
} c9.addEventListener("click", game)

//////////////////////////////////////////////////////////////
// ANUNCIAR VENCEDOR!

async function winner(){
    var winner = await tictactoeService.getWinner()
        .then(res => res.json())
        .catch(rej => console.log(rej))

    if (winner == "tie"){
        window.alert("It's a tie!")
        tictactoeService.newGame()
    }
    
    else if (winner == "X"){
        window.alert("X won!")
        tictactoeService.newGame()
    }

    else if (winner == "O"){
        window.alert("O won!")
        tictactoeService.newGame()
    }
}

//////////////////////////////////////////////////////////////
// DELETE
var newGameButton = document.getElementById("savechang")
function deleteBoard() {
    tictactoeService.newGame()
        .then((res) => res.json())
        .catch((rej) => console.log(rej))
} newGameButton.addEventListener("click", deleteBoard)

