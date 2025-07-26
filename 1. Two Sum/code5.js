function twoSum(nums, target) {
    let i = 0;
    let j = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] + nums[j] === target) break;
        }
        if (nums[i] + nums[j] === target) break;
    }
    return [i, j];
}

// another variation

function twoSum(nums,target) {
    let i=0;
    let j=0;
    iloop:
    for(i=0;i<nums.length;i++) {
        for(j=0;j<nums.length;j++) {
            if(i===j) continue;
            if(nums[i]+nums[j]===target) break iloop;
        }
    }
    return [i,j];
}