function twoSum(nums, target) {
    let res = [];
    nums.forEach((starti, i) => {
        nums.forEach((startj, j) => {
            if ((starti + startj) === target && i !== j) {
                res = [i, j];
                return;
            }
        })
    })
    return res;
}