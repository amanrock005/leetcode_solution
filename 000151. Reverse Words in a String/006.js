var reverseWords = function(s) {
    let word = "";
    let res = [];
    for(let i = s.length - 1;i >= 0; i--) {
        if(s[i] !== " ") {
            word = s[i] + word;
        } else if(word.length > 0) {
            res.push(word);
            word = "";
        }
    }
    if(word.length > 0) res.push(word);
    return res.join(" ");
};