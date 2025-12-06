var addTwoNumbers = function(l1, l2, remain) {
    if(!l1 && !l2 && !remain) return;
    let total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (remain ? remain : 0);
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, parseInt(total/10)));
};