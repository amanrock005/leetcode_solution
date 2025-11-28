var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    while(l1 || l2) {
        let x = l1 ? l1.val : 0; // let x = (l1 !== null) ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum%10);
        curr = curr.next;

        if(l1) l1 = l1.next; // if(l1 !== null) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    if(carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};