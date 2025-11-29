function twoSum(nums,target) {
    for(let i=0;i<nums.length;i++) {
        let subarr = nums.slice(i+1);
        let complement = target - nums[i];
        let j = subarr.findIndex(n => n === complement)
        if(j!==-1) return [i,j+i+1]; // explain why j+i+1
    }
}

// another variation

function twoSum(nums,target) {
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        let subarr = nums.slice(i+1);
        if(subarr.includes(complement)) {
            let j = subarr.indexOf(complement);
            return [i,j+i+1];
        }
    }
}

// anoter variation 

function twoSum(nums,target) {
     for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        let subarr = nums.slice(i+1);
        if(subarr.includes(complement)) {
            // explain the difference between arr.find and arr.findIndex functionn
            let j = subarr.findIndex(n => n === complement);
            return [i,j+i+1];
        }
    }
}