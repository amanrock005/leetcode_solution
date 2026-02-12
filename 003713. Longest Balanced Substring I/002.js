var longestBalanced = function(s) {
    const n = s.length;
    let max = 0;

    for(let i=0;i<n;i++) {
        let mp = new Map(); 
        for(let j=i;j<n;j++) {
            let ch = s[j];
            mp.set(ch,(mp.get(ch)||0)+1);
            let values = [...mp.values()];
            let first = values[0];
            if(values.every(v => v === first)) {
                max = Math.max(max,j-i+1);
            }
        }
    }
    return max;
};