function twoSum(nums,target) {
     let obj = {};
    let flag = false;
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        for(let j=i+1;j<nums.length;j++) {
            if(nums[j] === complement) {
                obj[i] = nums[i];
                obj[j] = nums[j];
                flag = true;
                break;
            }
        }
        if(flag) break;
    }
    let res = [];
    for(let [key,val] of Object.entries(obj)) {
        res.push(Number(key)); // keys are stored as string
    }
    //optinally 
    /*
      for(let key in obj) {
        // to extract values 
        // let val = obj[key];
        res.push(Number(key));
      }
    */
    return res;
}