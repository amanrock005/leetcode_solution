var reverseWords = function(s) {
    let rs = "";
    let i = 0;
    while(s[i]) i++;
    i--;
    while(i >= 0) {
        while(s[i] === " ") i--;
        let str = ""
        while(s[i] !== " " && s[i]) {
            str = s[i] + str;
            i--;
        }
        if(str[0]) {
            rs += rs[0] ? " " : "";
            rs += str;
        }
        i--;
    }
    return rs;
};