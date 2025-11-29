var canAliceWin = function(nums) {
    let singles = nums.filter(num => num<10);
    let doubles = nums.filter(num => num>=10);
    if(!singles.length && !doubles.length) return false;
    if(!singles.length || !doubles.length) return true;
    return singles.reduce((a,c) => a+c) != doubles.reduce((a,c) => a+c);
};