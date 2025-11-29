var minOperations = function(nums, k) {
    let sum = nums.reduce((acc,num) => acc+num);
    return sum%k;
};