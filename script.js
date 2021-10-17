let playerScore = 0;
let computerScore = 0;

// Random returns rock or papper or scissors
function computerPlay()
{
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0)
    {
        return "Rock";
    }
    else if (randomNum == 1)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

// Convert playerSelection to lowercase
function playerSelection(select)
{
    return select.toLowerCase();
}

function playGame(computerPick, userPick)
{
    if (computerPick == "Rock" && userPick == "rock")
    {
        return "It's a Tie!";
    }
    if (computerPick == "Paper" && userPick == "paper")
    {
        return "It's a Tie!";
    }
    if (computerPick == "Scissors" && userPick == "scissors")
    {
        return "It's a Tie!";
    }
    if (computerPick == "Scissors" && userPick == "rock")
    {
        playerScore++;
        return "You win! Rock beats scissors";
    }
    if (computerPick == "Scissors" && userPick == "paper")
    {
        computerScore++;
        return "You lose! Scissors beats paper";
    }
    if (computerPick == "Rock" && userPick == "scissors")
    {
        computerScore++;
        return "You lose! Rock beats scissors";
    }
    if (computerPick == "Rock" && userPick == "paper")
    {
        playerScore++;
        return "You win! Paper beats rock";
    }
    if (computerPick == "Paper" && userPick == "scissors")
    {
        playerScore++;
        return "You win! Scissors beats paper";
    }
    if (computerPick == "Paper" && userPick == "rock")
    {
        computerScore++;
        return "You lose! Paper beats rock";
    }
}


function game()
{
    let counter = 0;
    while (counter < 5)
    {
        console.log(playGame(computerPlay(), playerSelection("RoCk")));
        console.log("\n");
        counter++;
    }
    if (playerScore > computerScore)
    {
        console.log("You win!\n");
        console.log("Player score: " + playerScore + "\n");
        console.log("Computer score: " + computerScore + "\n");
    }
    else if (playerScore < computerScore)
    {
        console.log("Computer win!\n");
        console.log("Player score: " + playerScore + "\n");
        console.log("Computer score: " + computerScore + "\n");
    }
    else
    {
        console.log("It's a tie!");
        console.log("Player score: " + playerScore + "\n");
        console.log("Computer score: " + computerScore + "\n");
    }
}

game();

