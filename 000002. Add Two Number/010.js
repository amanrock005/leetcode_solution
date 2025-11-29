var addTwoNumbers = function(l1, l2) {
    let it1 = l1;
    let it2 = l2;
    const sum = new ListNode(0);
    let itSum = sum;
    while(it1 || it2) {
        const val1 = it1 ? it1.val : 0;
        const val2 = it2 ? it2.val : 0;
        const curr = val1 + val2 + itSum.val;

        itSum.val = curr%10;
        if(it1?.next || it2?.next || Math.floor(curr/10)) {
            itSum.next = new ListNode(Math.floor(curr/10));
        }
        if(it1) it1 = it1.next;
        if(it2) it2 = it2.next;
        itSum = itSum.next;
    }
    return sum;
};