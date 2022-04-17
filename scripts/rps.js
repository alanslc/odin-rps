const displayChoices = ['Rock', 'Paper', 'Scissors']
const choices = ['rock', 'paper', 'scissors']
const PICK_CHOICE_MSG = 'Pick a gesture'
const WIN_GAME_MSG = 'Congratulations! You have won the game!'
const LOSE_GAME_MSG = 'Sorry. You Lose.'
const GAMES = 5

let playedGame = 0;
let playerScore = 0;
let computerScore = 0;

for (ele of document.querySelectorAll('.image'))
   ele.addEventListener('click', play)

resetGame()

function play(e) {
   if (playerScore >= GAMES || computerScore >= GAMES)
      return

   const result = playRound(e.target.id, computerPlay())
   updateMessage(result)
   updateScore(playerScore, computerScore)

   if (playerScore >= GAMES) {
      const winMsg = document.getElementById('win-msg')
      winMsg.innerText = WIN_GAME_MSG
   }

   if (computerScore >= GAMES) {
      const winMsg = document.getElementById('win-msg')
      winMsg.innerText = LOSE_GAME_MSG
   }
}

function resetGame() {
   playedGame = 0;
   playerScore = 0;
   computerScore = 0;

   updateMessage(PICK_CHOICE_MSG)
   updateScore(playerScore, computerScore)
}

function updateMessage(txt) {
   const msg = document.getElementById('msg')
   msg.innerText = txt
}

function updateScore(playerScore, computerScore) {
   const playerScoreBoard = document.getElementById('player-score')
   const computerScoreBoard = document.getElementById('computer-score')

   playerScoreBoard.innerText = playerScore
   computerScoreBoard.innerText = computerScore
}

function playRound(playerSelection, computerSelection) {
   const player = choices.indexOf(playerSelection);
   const cpu = choices.indexOf(computerSelection);
   const compare = player - cpu;

   let result;

   if (compare == 0) {
      result = "Tie"
   }
   else if (compare == 1 || compare == -2) {
      playerScore++
      result = `You Win! ${displayChoices[player]} beats ${displayChoices[cpu]}`
   }
   else {
      computerScore++
      result = `You Lose! ${displayChoices[cpu]} beats ${displayChoices[player]}`

   }

   return result;
}

function computerPlay() {
   return choices[Math.floor(Math.random() * choices.length)]
}

/*
function game(n = 5) {
   let playerScore = 0
   let computerScore = 0

   for (let i = 0; i < n; i++) {
      const computerSelection = computerPlay()
      const playerSelection = humanPlay()
      if (playerSelection == 'quit')
         break

      const result = playRound(playerSelection, computerSelection)
      console.log(result)

      if (result.startsWith('You Win'))
         playerScore++
      else if (result.startsWith('You Lose'))
         computerScore++
   }

   console.log(`Score [ Player (${playerScore}) : Computer(${computerScore}) rock]`)
}
*/

/*
function humanPlay() {
   let c = -1;

   // should use do while loop?
   while (c < 0) {
      const choice = prompt(`What is your choice? (${displayChoices})`)
      if (choice == null)
         return 'quit'

      c = choices.indexOf(choice.toLowerCase())
   }

   return choices[c]
}
*/