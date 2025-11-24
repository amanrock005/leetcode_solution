function twoSum(nums,target) {
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        let idx = nums.indexOf(complement);
        if(idx !== -1 && i!==idx) return [i,idx];
    }
}