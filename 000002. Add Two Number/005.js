var addTwoNumbers = function(l1, l2) {
    let newList = null;
    let firstNode = null;
    let carryOver = 0;
    let index = 0;

    while(l1 || l2 || carryOver>0) {
        let current = 0;
        if(l1) {
            current += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            current += l2.val;
            l2 = l2.next;
        }
        current += carryOver;
        if(current > 9) {
            let arr = Array.from(String(current),Number);
            current = arr[1];
            carryOver = arr[0];
        } else {
            carryOver = 0;
        } if(index == 0) {
            firstNode = new ListNode(current,null);
            newList = firstNode;
        } else {
            newList.next = new ListNode(current,null);
            newList = newList.next;
            if(index == 1) {
                firstNode.next = newList;
            }
        }
        index++;
    }
    return firstNode;
};