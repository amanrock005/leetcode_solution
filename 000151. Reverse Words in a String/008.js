var reverseWords = function(s) {
    let wordList = s.match(/\S+/g);
    wordList.reverse();
    return wordList.join(" ");
};