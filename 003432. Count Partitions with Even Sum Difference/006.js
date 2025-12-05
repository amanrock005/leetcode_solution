var countPartitions = function(nums) {
    const n = nums.length;

    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);

    let count = 0;
    let runningSum = 0;

    for(let i=0; i<n; i++) {
        runningSum += nums[i];
        leftSum[i] = runningSum;
    }

    runningSum = 0;

    for(let i=n-1; i>=0; i--) {
        runningSum += nums[i];
        rightSum[i] = runningSum;
    }

    for(let i=0;i<n;i++) {
        const ls = leftSum[i];
        const rs = rightSum[i+1] || Infinity;
        const diff = Math.abs(rs-ls);
        if(diff%2===0) {
            count++;
        }
    }
    return count;
};