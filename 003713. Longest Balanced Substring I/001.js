//TLE
var longestBalanced = function(s) {
    const n = s.length
    let max = 1;
    for(let i=0;i<n;i++) {
        for(let j=i;j<n;j++) {
            let mp = new Map();
            let substr = s.slice(i,j+1);
            for(let ch of substr) {
                mp.set(ch,(mp.get(ch)||0)+1);
            }
            let st = new Set(mp.values())
            if(st.size === 1 && substr.length > max) max = substr.length;
        }
    }
    return max;
};