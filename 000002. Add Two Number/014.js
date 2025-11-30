function sumAsList(sum) {
    let node = new ListNode();
    for(let i=sum.length-1; i>=0; i--) {
        node.val = sum[i];
        let prev = new ListNode();
        prev.next = node;
        node = prev;
    }
    return node.next;
}

function sumInts(a,b) {
    const ans = [];
    const l = a.length >= b.length ? a.length : b.length;
    let carry = 0;

    for(let i=0;i<l;i++) {
        const aVal = a[i] || 0;
        const bVal = b[i] || 0;
        const sum = aVal + bVal + carry;
        const remainder = sum - 10;
        if(remainder >= 0) {
            carry = 1;
            ans.push(remainder);
        } else {
            carry = 0;
            ans.push(sum);
        }
    }
    if(carry) {
        ans.push(carry);
    }
    return ans;
}

function extract(node) {
    const ints = [];
    while(node) {
        ints.push(node.val);
        node = node.next;
    }
    return ints;
}

var addTwoNumbers = function(l1, l2) {
    const i1 = extract(l1);
    const i2 = extract(l2);

    const sum = sumInts(i1, i2);

    return sumAsList(sum);
};