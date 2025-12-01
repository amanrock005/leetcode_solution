var addTwoNumbers = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    var result = new ListNode();

    let tmp = 0;
    let current = result;
    let prev = null;
    while(l1 !== null && l2 !== null) {
        current.val = (l1.val + l2.val + tmp) % 10;
        if(l1.val + l2.val + tmp >= 10) {
            tmp = 1;
        } else {
            tmp = 0;
        }
        current.next = new ListNode();
        prev = current;
        current = current.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    let tmpListTail = l1 !== null ? l1 : l2;
    while(tmpListTail !== null) {
        current.val = (tmpListTail.val + tmp) %10;
        tmp = tmpListTail.val + tmp >= 10 ? 1 : 0;
        current.next = new ListNode();
        prev = current;
        current = current.next;
        tmpListTail = tmpListTail.next;
    }
    if(tmp !== 0) {
        current.val = 1;
    } else {
        prev.next = null;
    }
    return result;
};
