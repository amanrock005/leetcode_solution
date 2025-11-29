var addTwoNumbers = function(l1, l2) {
    let linkArr1 = new Array;
    let linkArr2 = new Array;
    while(l1) {
        linkArr1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        linkArr2.push(l2.val);
        l2 = l2.next;
    }
    linkArr1 = BigInt(linkArr1.reverse().join(''));
    linkArr2 = BigInt(linkArr2.reverse().join(''));
    let result = linkArr1 + linkArr2;
    result = String(result).split('').map(Number);
    const newLink = new ListNode(0);
    let link = newLink;

    for(const r of result.reverse()) {
        link.next = new ListNode(r);
        link = link.next;
    }
    return newLink.next;
};