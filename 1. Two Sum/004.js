function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let complementIdx = nums.indexOf(complement);
        if (nums.includes(complement) && i !== complementIdx) return [i, complementIdx];
    }
}