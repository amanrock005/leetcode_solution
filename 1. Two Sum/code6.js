function twoSum(nums,target) {
    for(let i=0;i<=nums.length;i++) {
        let complement = target - nums[i]; 
        for(let j=0;j<=nums.length;j++) {
            if(i===j) continue;
            complement = complement - nums[j];
            if(complement === 0) return [i,j];
            else complement = target - nums[i];
        }
    }
}