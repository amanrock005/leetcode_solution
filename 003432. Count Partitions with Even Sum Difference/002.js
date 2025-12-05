var countPartitions = function(nums) {
    const n = nums.length;
    let count = 0;
    for(let i=1;i<n;i++) {
        let left = 0;
        for(let j=0;j<=i;j++) {
            left += nums[j];
        }
        let right = 0;
        for(let k=i+1;k<n;k++) {
            right += nums[k];
        }
        if((left-right)%2===0) count++;
    }
    return count;
};