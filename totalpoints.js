function totalPoints(games) {
    let totalPoints = 0;

    games.forEach(game => {
        const [x, y] = game.split(':').map(Number);
        if (x > y) {
            totalPoints += 3;
        } else if (x === y) {
            totalPoints += 1; // Draw
        }
        
    });

    return totalPoints;
}


const games = ["3:1", "2:2", "0:1", "4:3", "1:1"];
console.log(totalPoints(games)); 
