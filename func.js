function rounds() {

    let choice;
    function getComputerChoice() {
        var arr = ['rock', 'paper', 'scissor'];

        var p = arr[Math.floor(Math.random() * 3)];
        return p;

    }


    function play(computerchoice, playerchoice) {
        if (computerchoice == 'rock' && playerchoice == 'paper') {
            return "computer won!";
        }
        else if (computerchoice == 'rock' && playerchoice == 'scissor') {
            return "player won!";
        }
        else if (computerchoice == 'paper' && playerchoice == 'scissor') {
            return "player won!";
        }
        else if (computerchoice == 'paper' && playerchoice == 'rock') {
            return "computer won!";
        }
        else if (computerchoice == 'scissor' && playerchoice == 'paper') {
            return "computer won!";
        }
        else if (computerchoice == 'scissor' && playerchoice == 'rock') {
            return "player won!";
        }
        else if(computerchoice==playerchoice) 
        {
            return "its a tie";
        }
        else
        {
            return "you have entered incorrect";
        }
    }


    var playerchoice = window.prompt("Enter your choice");
    playerchoice = playerchoice.toLowerCase();
    var computerchoice = getComputerChoice();



    var pt=(play(computerchoice, playerchoice));
    console.log(pt);
    return pt;

}

var i=0;
while(i<5)
{
    var pw=0;
    var cw=0;
    var r=rounds();
    if(r=="player won!")
    {
        pw+=1;
    }

    if(r=="computer won!")
    {
        cw+=1;
    }
    i+=1;

}
if(pw>cw)
{
    console.log("Player won!!!!");
}
else if(cw<pw)
{
    console.log("Computer won!!");
}
else
{
    console.log("its a tie :(");
}


