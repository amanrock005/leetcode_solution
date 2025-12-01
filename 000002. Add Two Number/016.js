var addTwoNumbers = function(l1, l2) {
    let t1 = l1;
    let t2 = l2;
    let dummyNode = new ListNode(-1);
    let curr = dummyNode;
    let carry = 0;
    while(t1 || t2) {
        let sum = carry;
        if(t1) sum = sum + t1.val;
        if(t2) sum = sum + t2.val;
        let newNode = new ListNode(sum%10);
        carry = Math.floor(sum/10);
        curr.next = newNode;
        curr = newNode;

        if(t1) t1 = t1.next;
        if(t2) t2 = t2.next;
    }
    if(carry) {
        let newNode = new ListNode(carry);
        curr.next = newNode;
        curr = newNode;
    }
    return dummyNode.next;
};