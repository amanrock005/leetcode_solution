function twoSum(nums,target) {
    let left = 0;
    let right = left+1;
    let n = nums.length;
    while(left<n) {
        if((nums[left]+nums[right]) === target) return [left,right];
        else if(right<n) {
            right++;
        } else {
            left++;
            right=left+1;
        }
    }
}