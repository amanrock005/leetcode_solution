var countPartitions = function(nums) {
    let totalSum = 0;
    for(let i=0;i<nums.length;i++) {
        totalSum += nums[i];
    }
    return totalSum%2 === 0? nums.length-1:0;
};