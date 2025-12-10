var gcdOfOddEvenSums = function(n) {
    function gcd(a,b) {
        let temp;
        while(b) {
            temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    }
    let even = 0;
    let odd = 0;
    for(let i=1,count=0;count<n;i+=2,count++) {
        odd += i;
    }
    for(let i=2,count=0;count<n;i+=2,count++) {
        even += i;
    }
    return gcd(even,odd);
};