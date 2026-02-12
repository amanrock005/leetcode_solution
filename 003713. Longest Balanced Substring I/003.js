var longestBalanced = function(s) {
    let n = s.length;
    let ans = 0;
    for(let i=0;i<n;i++) {
        let freq = new Array(26).fill(0);
        for(let j=i;j<n;j++) {
            freq[s.charCodeAt(j)-97]++;
            let min = Infinity;
            let max = 0;

            for(let f of freq) {
                if(f > 0) {
                    min = Math.min(min,f);
                    max = Math.max(max,f);
                }
            }
            if(min === max) {
                ans = Math.max(ans,j-i+1);
            }
        }
    }
    return ans;
};