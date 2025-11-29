var addTwoNumbers = function(l1, l2) {
    let sumArray = [];
    let l3 = new ListNode(0);
    let dummy = l3;
    while(l1 || l2) {
        sumArray.push((l1 ? l1.val : 0) + (l2 ? l2.val : 0));
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    let newSumArray = [];
    let extra = 0;
    for(let i=0;i<sumArray.length;i++) {
        let current = sumArray[i] + extra;
        extra = 0;
        let currentLength = current.toString().length;
        if(current>9) {
            newSumArray.push(Math.floor(current %(10*(currentLength-1))));
            dummy.next = new ListNode(Math.floor(current %(10 *(currentLength -1))));
            extra = Math.floor(current / (10 * (currentLength -1)));
        } else {
            newSumArray.push(current);
            dummy.next = new ListNode(current);
        }
        dummy = dummy.next;
    }
    if(extra != 0) {
        newSumArray.push(extra);
        dummy.next = new ListNode(extra);
        dummy = dummy.next;
    }
    return l3.next;
};