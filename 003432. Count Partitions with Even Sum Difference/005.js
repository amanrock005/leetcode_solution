var countPartitions = function(nums) {
   let n = nums.length;
   let total = nums.reduce((a,b) => a+b,0);

   let leftSum = 0;
   let count = 0;
   // check every partition i (0 to n-2)
   for(let i=0;i<n-1;i++) {
    leftSum += nums[i];  // sum of left side
    let rightSum = total - leftSum; // sum of right side

    // condidtion: same parity both even OR both odd
    if((leftSum % 2) === (rightSum %2)) {
        count++;
    }
   } 
   return count;
};