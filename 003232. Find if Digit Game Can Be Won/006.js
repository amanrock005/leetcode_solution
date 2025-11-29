var canAliceWin = function(nums) {
    let single = 0;
    let double = 0;
    for(let num of nums) {
        if(num < 10) single += num;
        else double += num;
    }
    if(single > double || double > single) return true;
    return false;
};