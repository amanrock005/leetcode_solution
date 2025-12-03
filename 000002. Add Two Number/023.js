var addTwoNumbers = function(l1, l2) {
    let num1 = '';
    let num2 = '';

    while(l1 !== null) {
        num1 += l1.val;
        l1 = l1.next;
    }

    while(l2 !== null) {
        num2 += l2.val;
        l2 = l2.next;
    }

    let reversed1 = num1.split('').reverse().join('');
    let reversed2 = num2.split('').reverse().join('');
    let ans = (BigInt(reversed1) + BigInt(reversed2)).toString();
    let digits = ans.split('').reverse().map(x => Number(x));

    let dummy = new ListNode(0);
    let current = dummy;

    for(let d of digits) {
        current.next = new ListNode(d);
        current = current.next;
    }
    return dummy.next;
};