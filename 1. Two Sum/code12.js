function twoSum(nums,target) {
     let obj = {};
    outerloop:
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums.length;j++) {
            if(nums[i]+nums[j] === target && i!==j) {
                obj[i] = j;
                break outerloop;
            }
        }
    }
    // traverse object
    for(let ob in obj) {
        return [parseInt(ob),obj[ob]];
    }
}