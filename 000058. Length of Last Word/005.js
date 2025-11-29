var lengthOfLastWord = function(s) {
    let count = 0;
    let result = 0;
    for(let i=0;i<s.length;i++) {
        if(s[i] === ' ') {
            count = 0;
        } else {
            count++;
            result = count;
        }
    }
    return result;
};