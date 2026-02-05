var reverseWords = function(s) {
    let arr = s.split(' ');
    let res = '';
    console.log(arr);
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] != '') {
            res += arr[i] + ' ';
        }
    }
    return res.trim();
};