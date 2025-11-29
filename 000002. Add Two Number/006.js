var returnNumber = function(l) {
    let numArray = [];
    while(l) {
        numArray.push(l.val);
        l = l.next;
    }
    return BigInt(numArray.reverse().join(''));
}

var returnLinkedList = function(arr) {
    let l = new ListNode(parseInt(arr[0]),undefined);
    let originalList = l;
    if(arr.length === 1) return l;
    else {
        for(let i=1;i<arr.length;i++) {
            l.next = new ListNode(parseInt(arr[i]),undefined);
            l = l.next;
        }
    }
    return originalList;
}

var addTwoNumbers = function(l1, l2) {
    let sum = returnNumber(l1) + returnNumber(l2);
    return returnLinkedList(sum.toString().split('').reverse())
};