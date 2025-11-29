var countSubarrays = function(nums, k) {
    // brute force
    const n = nums.length;
    let count = 0;
    for(let i=0;i<n;i++) {
        for(let j=i;j<n;j++) {
            let sum = nums.slice(i,j+1).reduce((acc,num) => acc+num);
            let score = sum * (j-i+1);
            if(score < k) count++;
        }
    }
    return count;
}