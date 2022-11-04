let hasWinner = false;

//Selects the starting player at random.
let currentPlayer = Math.random() < 0.5 ? 'Blue' : 'Red';
$('#player').text(currentPlayer);

//Automatically populates the board with the squares.
for (let i = 0; i < 25; i++)
{
    //Each square is given a unique ID, so that it can be referenced later.
    $('#grid').append('<div class="square" cell-num="' + i + '"></div>');
}

//Pick the square that will be the winner.
let randomCell = Math.floor(Math.random() * 25);

//An event listener is added to each square.
$('.square').click(function () {
    //Check if the game is over.
    if (hasWinner) return;

    //If the square is the winner, the player wins.
    if ($(this).attr('cell-num') == randomCell)
    {
        //Output the winner.
        $(this).css("background-color", "green");
        $('h1').text(currentPlayer + " has won!");

        //Play the winning sound.
        new Audio('ding.mp3').play();

        //Set the game to over.
        hasWinner = true;
    }
    else
    {
        //Highlight the square that was clicked with the current player's color.
        if (currentPlayer == 'Red')
        {
            $(this).addClass('red');
        }
        else
        {
            $(this).addClass('blue');
        }

        //Ossilate the current player.
        currentPlayer = currentPlayer == 'Red' ? 'Blue' : 'Red';
        $('#player').text(currentPlayer);
    }
});