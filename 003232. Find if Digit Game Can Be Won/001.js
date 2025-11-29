var canAliceWin = function(nums) {
    let single = 0;
    let double = 0;
    for(let num of nums) {
        num < 10 ? single += num : double += num;
    }
    return single !== double;
};