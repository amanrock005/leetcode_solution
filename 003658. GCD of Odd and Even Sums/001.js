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
    let even = n*(n+1);
    let odd = n*n;
    return gcd(even,odd);
};