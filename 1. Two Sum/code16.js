function twoSum(nums,target) {
    const hash = {};
    for(let i=0;i<nums.length;i++) {
        const n = nums[i];
        const need = target - n;
        const h = n%hc;
        const hn = need%hc;
        const fh=hash[hn];
        if(fh) {
            for(let j=0;j<fh.length;j++) {
                if(nums[fh[j]] === need) return [i,fh[j]];
            }
        }
        if(!hash[h]) {
            hash[h] = [i];
        } else {
            hash[h].push(i);
        }
    }
}