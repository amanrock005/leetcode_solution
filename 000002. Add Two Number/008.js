var reverseListConvertToString = function(listNode) {
    var reversedList = "";
    var ptr = listNode;
    while(ptr) {
        reversedList = ptr.val + reversedList;
        ptr = ptr.next;
    }
    return reversedList;
}

var reverseStringConvertToListNode = function(str) {
    var i = 0;
    var allListNodes = undefined;
    while(i < str.length) {
        var current = Number(str[i]);
        var allListNodes = new ListNode(current,allListNodes);
        i++;
    }
    return allListNodes;
}

var addTwoNumbers = function(l1, l2) {
    const str1 = reverseListConvertToString(l1);
    const str2 = reverseListConvertToString(l2);
    const sum = BigInt(str1) + BigInt(str2);
    return reverseStringConvertToListNode(String(sum));
};