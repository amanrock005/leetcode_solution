var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    const start = new ListNode(0,null);
    let curr = start;

    let carry = 0;
    while(p1 || p2) {
        const val = (p1?.val ?? 0) + (p2?.val ?? 0) + carry;
        curr.next = new ListNode(val%10, null);
        carry = val > 9 ? 1 : 0;
        curr = curr.next;
        p1 = p1?.next;
        p2 = p2?.next;
    }

    if(carry) {
        curr.next = new ListNode(1,null);
    }
    return start.next;
};