var reverseWords = function(s) {
    let stack = [];
    s = s.trim();
    let index = 0;
    while(index < s.length) {
        if(index < s.length && s[index] == " ") {
            while(s[index+1] == " ") {
                index++;
            }
        } else {
            let word = "";
            while(index < s.length && s[index] != " ") {
                word = word + s[index];
                index++;
            }
            stack.push(word);
        }
        index++;
    }

    let res = ""
    while(stack.length) {
        res = res + stack.pop() + " ";
    }

    return res.trim();
};