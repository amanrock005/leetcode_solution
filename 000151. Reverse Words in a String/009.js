var reverseWords = function(s) {
    let some = s.split(' ');
    let res = "";

    for(let i = some.length - 1;i>=0;i--) {
        if(some[i] !== "") {
            if(res.length > 0) {
                res += " ";
            }

            res += some[i];
        }
    }

    return res;
};