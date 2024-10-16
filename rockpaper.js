const rps = (player1, player2) => {
    if (player1 === player2) {
        return 'Draw!';
    }
    if (
        (player1 === 'rock' && player2 === 'scissors') ||  
        (player1 === 'paper' && player2 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper')  
    ) {
        return 'player1 won';
    } else {
        return 'player2 won';  
    }
};
