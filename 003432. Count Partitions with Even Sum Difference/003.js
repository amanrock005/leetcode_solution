var countPartitions = function(nums) {
    let total = nums.reduce((a,b) => a+b,0);
    const n = nums.length;
    if(total %2 !== 0) return 0;
    return n-1;
};