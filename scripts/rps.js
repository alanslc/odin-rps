const displayChoices = ['Rock', 'Paper', 'Scissors']
const choices = ['rock', 'paper', 'scissors']

game()

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

function playRound(playerSelection, computerSelection) {
   const player = choices.indexOf(playerSelection);
   const cpu = choices.indexOf(computerSelection);
   const compare = player - cpu;

   let result;

   if (compare == 0) {
      result = "Tie"
   }
   else if (compare == 1 || compare == -2) {
      result = `You Win! ${displayChoices[player]} beats ${displayChoices[cpu]}`
   }
   else {
      result = `You Lose! ${displayChoices[cpu]} beats ${displayChoices[player]}`

   }

   return result;
}

function humanPlay() {
   let c = -1;

   while (c < 0) {
      const choice = prompt(`What is your choice? (${displayChoices})`)
      if (choice == null)
         return 'quit'

      c = choices.indexOf(choice.toLowerCase())
   }

   return choices[c]
}

function computerPlay() {
   return choices[Math.floor(Math.random() * choices.length)]
}