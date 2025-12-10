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
    let original = n;
    for(let i=1;n!==0;i+=2) {
        odd += i;
        n--;
    }
    n = original
    for(let i=2;n!==0;i+=2) {
        even += i;
        n--;
    }
    return gcd(even,odd);
};