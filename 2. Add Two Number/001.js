var addTwoNumber = function (l1,l2) {
    let dummy = new ListNode(0,null);
    let ptr = dummy;
    let carry = 0;
    while(l1 || l2 || carry === 1) {
        let d1 = l1 ? l1.val : 0;
        let d2 = l2 ? l2.val : 0;
        let sum = d1 + d2 + carry;
        let d3 = sum%10;
        carry = Math.floor(sum/10);
        ptr.next = new ListNode(d3,null);
        ptr = ptr.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return dummy.next;
}