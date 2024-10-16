function getCount(str){
function getCount(str) {
    let vowelsCount = 0;
    const arr = str.split(""); 
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o': 
            case 'u':
                vowelsCount++;
                break;
        }
    }
    return vowelsCount; // 
}
}