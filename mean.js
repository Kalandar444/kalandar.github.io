function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) { 
        sum += marks[i];
    }
    const avg = sum / marks.length; 
    const roundedDown = Math.floor(avg); 
    return roundedDown;
}
