var addTwoNumbers = function (l1, l2) {
        let dummy = new ListNode();
        let current = dummy;
        let carry = 0;
        while (l1 || l2 || carry) {
            let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
            let val = sum % 10;
            carry = Math.floor(sum / 10);
            current.next = new ListNode(val);
            current = current.next;
            l1 = l1?.next || null;
            l2 = l2?.next || null;
        }
        return dummy.next;
};