var addTwoNumbers = function(l1, l2) {
    // without dummy
    let ptr = null;
    let head = null;
    let carry = 0;
    while(l1 || l2 || carry > 0) {
        let d1 = l1 ? l1.val : 0;
        let d2 = l2 ? l2.val : 0;
        let sum = d1 + d2 + carry;
        let d3 = sum%10;
        carry = Math.floor(sum/10);
        if(head === null) {
            head = new ListNode(d3,null);
            ptr = head;
        } else {
            ptr.next = new ListNode(d3,null);
            ptr = ptr.next;
        }
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return head;
};