var addTwoNumbers = function(l1, l2) {
    let sentinel = new ListNode();
    let prev = sentinel;
    let carry = 0;
    while(l1 || l2 || carry>0) {
        let firstNum = 0;
        let secondNum = 0;
        if(l1) {
            firstNum = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            secondNum = l2.val;
            l2 = l2.next;
        }
        let sumNum = firstNum + secondNum + carry;
        let digit = sumNum%10;
        carry = Math.floor(sumNum/10);
        let newNode = new ListNode(digit);
        prev.next = newNode;
        prev = prev.next;
    }
    return sentinel.next;
};