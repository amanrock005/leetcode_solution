var lengthOfLastWord = function(s) {
    let words = s.split(' ').filter(str => str.length > 0);
    return words[words.length-1].length;
};