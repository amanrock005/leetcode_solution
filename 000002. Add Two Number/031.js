var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode();
    let p3 = l3;

    let carry = 0;
    while(l1 !== null || l2 !== null) {
        const n1 = l1 === null ? 0 : l1.val;
        const n2 = l2 === null ? 0 : l2.val;
        let sum = n1 + n2 + carry;
        carry = 0;

        if(sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        p3.next = new ListNode(sum);
        p3 = p3.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }

    if(carry === 1) {
        p3.next = new ListNode(1);
    }

    return l3.next;
};