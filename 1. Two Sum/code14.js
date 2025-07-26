function twoSum(nums,target) {
    let flag = false;
    let res = [];
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        for(let j=i+1;j<nums.length;j++) {
            if(nums[j] === complement) {
                res = [i,j];
                flag = true;
                break;
            }
        }
        if(flag) break;
    }
    return res;
}