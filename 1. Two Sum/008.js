function twoSum(nums,target) {
    let vals = [];
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        let find = vals.find(v => v[1] === complement);
        if(find) return [i,find[0]];
        vals.push([i,nums[i]]);
    }
}