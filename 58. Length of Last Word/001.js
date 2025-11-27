var lengthOfLastWord = function(s) {
    let words = s.trim().replace(/\s+/g,' ').split(' ');
    return words[words.length-1].length;
};