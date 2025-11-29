var addTwoNumbers = function(l1, l2) {
    let ptr = new ListNode(50);
    const resultList = ptr;
    let carryOn = 0;
    let sum = 0;

    while(l1 && l2) {
        const node = new ListNode();
        sum = l1.val + l2.val + carryOn;
        node.val = sum%10;
        carryOn = Math.floor(sum/10);
        l1 = l1.next;
        l2 = l2.next;
        if(ptr.val === 50) {
            ptr.val = node.val;
        } else if(ptr) {
            ptr.next = node;
            ptr = ptr.next;
        } else {
            ptr = node;
        }
    }

    while(l1) {
        const node = new ListNode();
        sum = l1.val + carryOn;
        node.val = sum%10;
        carryOn = Math.floor(sum/10);
        l1 = l1.next;
        if(ptr.val === 50) {
            ptr.val = node.val;
        } else if(ptr) {
            ptr.next = node;
            ptr = ptr.next;
        } else {
            ptr = node;
        }
    }

    while(l2) {
        const node = new ListNode();
        sum = l2.val + carryOn;
        node.val = sum%10;
        carryOn = Math.floor(sum/10);
        l2 = l2.next;
        if(ptr.val === 50) {
            ptr.val = node.val;
        } else if(ptr) {
            ptr.next = node;
            ptr = ptr.next;
        } else {
            ptr = node;
        }
    }
    if(carryOn > 0) {
        const node = new ListNode(carryOn);
        ptr.next = node;
    }

    return resultList;
};