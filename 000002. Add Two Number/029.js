var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode;
    let curr = dummyNode;
    let carry = 0;
    while(l1 != null || l2 != null || carry != 0) {
        let sum = carry;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        let num = sum % 10;
        carry = Math.floor(sum/10);

        dummyNode.next = new ListNode(num);
        dummyNode = dummyNode.next;
    }
    return curr.next;
};