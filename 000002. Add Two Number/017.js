var addTwoNumbers = function(l1, l2) {
    let carry = false;
    const add = (num1, num2) => {
        let out = num1.val + num2.val;
        if(carry) {
            out++;
            carry = false;
        } 
        if(out >= 10) {
            carry = true;
            out %= 10;
        }
        return out;
    }

    const head = new ListNode();
    let lout = head;

    while(l1.next && l2.next) {
        lout.val = add(l1,l2);
        l1 = l1.next;
        l2 = l2.next;
        lout.next = new ListNode();
        lout = lout.next;
    }
    lout.val = add(l1,l2);
    while(l1.next) {
        lout.next = new ListNode();
        lout = lout.next;
        l1 = l1.next;
        lout.val = add(l1, new ListNode());
    } 
    while(l2.next) {
        lout.next = new ListNode();
        lout = lout.next;
        l2 = l2.next;
        lout.val = add(l2, new ListNode());
    }
    if(carry) {
        lout.next = new ListNode();
        lout = lout.next;
        lout.val = 1;
    }
    return head;
};