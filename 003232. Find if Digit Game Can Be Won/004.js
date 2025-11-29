var canAliceWin = function(nums) {
    let single = nums.filter((a) => a<10);
    if(single.length > 0) {
        single = single.reduce((a,b) => a+b);
    }
    let double = nums.filter((a) => a>=10);
    if(double.length > 0) {
        double = double.reduce((a,b) => a+b);
    }
    if(single > double || double>single) return true;
    return false;
};