function century(year){
    if(year<100){
        return 1;
    }
    const firstTwoDigits=yearString().substr(0,2);
    if(year%100===0){
        return Number(firstTwoDigits);
    }else{
        return Number(firstTwoDigits)+1;
    }
}