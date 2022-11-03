let hasWinner = false;

let currentPlayer = Math.random() < 0.5 ? 'Blue' : 'Red';
$('#player').text(currentPlayer);

for (let i = 0; i < 25; i++)
{
    $('#grid').append('<div class="square" cell-num="' + i + '"></div>');
}

let randomCell = Math.floor(Math.random() * 25);

$('.square').click(function () {
    if (hasWinner) return;

    if ($(this).attr('cell-num') == randomCell)
    {
        $(this).css("background-color", "green");
        $('h1').text(currentPlayer + " has won!");

        new Audio('ding.mp3').play();

        hasWinner = true;
    }
    else
    {
        if (currentPlayer == 'Red')
        {
            $(this).addClass('red');
        }
        else
        {
            $(this).addClass('blue');
        }

        currentPlayer = currentPlayer == 'Red' ? 'Blue' : 'Red';
        $('#player').text(currentPlayer);
    }
});