var countPartitions = function(nums) {
    let total = 0;
    for(let i=0; i<nums.length-1; i++) {
        const leftSum = nums.slice(0,i+1).reduce((prev,cur) => prev+cur, 0);
        const rightSum = nums.slice(i+1).reduce((prev,cur) => prev + cur, 0);
        if(Math.abs(leftSum - rightSum) % 2 ===0) total++;
    }
    return total;
};