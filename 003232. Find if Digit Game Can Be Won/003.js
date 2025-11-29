var canAliceWin = function(nums) {
    let single = 0;
    let double = 0;
    nums.filter((num) => {
        if(num<10) single += num;
        else double += num;
    });
    return single !== double;
};