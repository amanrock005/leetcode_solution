var addTwoNumbers = function(l1, l2) {
    let val1 = '';
    let val2 = '';
    let current1 = l1;
    let current2 = l2;

    while(current1 !== null) {
        val1 = current1.val + val1;
        current1 = current1.next;
    }
    while(current2 !== null) {
        val2 = current2.val + val2;
        current2 = current2.next;
    }

    const sum = BigInt(val1) + BigInt(val2);
    const sumArray = sum.toString().split('').map(Number).reverse();

    let head = new ListNode(sumArray[0]);
    let previous = head;

    for(let i=1;i<sumArray.length;i++) {
        let current = new ListNode(sumArray[i]);
        previous.next = current;
        previous = current;
    }

    return head;
};