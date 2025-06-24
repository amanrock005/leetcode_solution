function twoSum(nums,target) {
    let mp = new Map();
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        if(mp.has(complement)) {
            return [i,mp.get(complement)];
        }
    }
    mp.set(nums[i],i);
}

let nums = [2,7,11,15];
let target = 9;
console.log(nums,target);