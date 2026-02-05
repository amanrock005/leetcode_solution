var reverseWords = function(s) {
    let res = [];
    let last = s.length - 1;
    while(last >= 0) {
        if(s[last] === " ") {
            last--;
            continue;
        }
        let revWord = [];
        while(s[last] != " " && last >= 0) {
            revWord.push(s[last]);
            last--;
        }
        res.push(revWord.reverse().join(""))
    }
    return res.join(" ");
};