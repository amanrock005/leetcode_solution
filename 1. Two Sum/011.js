function twoSum(nums,target) {
    let res = [];
    nums.forEach((vali,i) => {
        nums.slice(i+1).forEach((valj,j) => {
            if(vali+valj === target) {
                res = [i , j+i+1];
                return;
            }
        })
    })
    return res;
}