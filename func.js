let choice;
function getComputerChoice()
{
    var arr= ['rock','paper','scissor'];
    
    var p=arr[Math.floor(Math.random()*3)];
    return p;
    
}


function play(computerchoice,playerchoice)
{
    if(computerchoice=='rock' && playerchoice=='paper')
    {
        return "computer won!";
    }
    else if(computerchoice=='rock' && playerchoice=='scissor')
    {
        return "player won!";
    }
    else if(computerchoice=='paper' && playerchoice=='scissor')
    {
        return "player won!";
    }
    else if(computerchoice=='paper' && playerchoice=='rock')
    {
        return "computer won!";
    }
    else if(computerchoice=='scissor' && playerchoice=='paper')
    {
        return "computer won!";
    }
    else if(computerchoice=='scissor' && playerchoice=='rock')
    {
        return "player won!";
    }
    else
    {
        return "its a tie";
    }
}


var playerchoice=window.prompt("Enter your choice");
playerchoice=playerchoice.toLowerCase();
var computerchoice=getComputerChoice();


console.log(playerchoice);

console.log(play(computerchoice,playerchoice));

