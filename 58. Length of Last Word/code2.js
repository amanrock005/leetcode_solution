var lengthOfLastWord = function(s) {
    return s.trim().replace(/\s+/g,' ').split(' ').at(-1).length;
};