var addTwoNumbers = function(l1, l2) {
    let node = new ListNode();
    let curr = node;

    let sum = 0;
    let carry = 0;

    while(l1 && l2) {
        sum = l1.val + l2.val + carry;
        carry = 0;
        if(sum > 9) {
            carry = Math.floor(sum/10);
            sum = sum%10;
            curr.next = new ListNode(sum);
        } else {
            curr.next = new ListNode(sum);
        }
        curr = curr.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
        sum = l1.val + carry;
        carry = 0;
        if(sum > 9) {
            carry = Math.floor(sum/10);
            sum = sum%10;
            curr.next = new ListNode(sum);
        } else {
            curr.next = new ListNode(sum);
        }
        curr = curr.next;
        l1 = l1.next;
    }
    while(l2) {
        sum = l2.val + carry;
        carry = 0;
        if(sum > 9) {
            carry = Math.floor(sum/10);
            sum = sum%10;
            curr.next = new ListNode(sum);
        } else {
            curr.next = new ListNode(sum);
        }
        curr = curr.next;
        l2 = l2.next;
    }
    if(carry) {
        curr.next = new ListNode(carry);
    }
    return node.next;
};