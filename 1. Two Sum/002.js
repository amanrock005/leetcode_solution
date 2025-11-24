function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) return [i, j];
        }
    }
}

// another variation 
function twoSum(nums,target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) if(nums[i]+nums[j]===target) return [i,j];
    }
}

// another one 
function twoSum(nums,target) {
    for(let i=0;i<=nums.length;i++) {
        for(let j=0;j<=nums.length;j++) {
            if(nums[i]+nums[j]===target && i!==j) return [i,j];
        }
    }
}

// another one oye oye oye wo 
function twoSum(nums, target) {
     for(let i=0;i<nums.length;i++) {
        for(let j=nums.length-1;j>=0;j--) {
            if(nums[i]+nums[j] === target && i!==j) return [i,j];
        }
    }
}

// oye oye wo 

function twoSum(nums,target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]+nums[j] == target) return [i,j];
        }
    }
}

// optinonal chaining 

function twoSum(nums,target) {
    for(let i=0;i<nums?.length;i++) {
        for(let j=i+1;j<nums?.length;j++) {
            if(nums[i]+nums[j]===target && i!==j) return [i,j];
        }
    }
}