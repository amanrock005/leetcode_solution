var countPartitions = function(nums) {
    const n = nums.length;
    let count = 0;
    for(let i=1;i<n;i++) {
        let left = nums.slice(0,i+1).reduce((a,b) => a+b,0);
        let right = nums.slice(i+1,n).reduce((a,b) => a+b,0);
        if((left-right)%2===0) count++;
    }
    return count;
};