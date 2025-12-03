var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    let num2 = [];

    while(l1 !== null) {
        num1.push(l1.val);
        l1 = l1.next;
    }

    while(l2 !== null) {
        num2.push(l2.val);
        l2 = l2.next;
    }

    num1 = num1.reverse().join('');
    num2 = num2.reverse().join('');

    let final = BigInt(num1) + BigInt(num2);
    final = final.toString().split('').map(d => parseInt(d))

    let node = null;
    for(let i=0;i<final.length;i++) {
        node = new ListNode(final[i],node);
    }
    return node;
};