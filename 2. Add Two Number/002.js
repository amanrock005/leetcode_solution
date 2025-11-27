var addTwoNumber = function (l1,l2) {
    let str1 = "";
    let str2 = "";
    while(l1 || l2) {
        str1 = str1 + (l1 ? l1.val.toString() : "0");
        str2 = str2 + (l2 ? l2.val.toString() : "0");
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    function strReverse(s) {
        return s.split('').reverse().join('');
    }
    let str3 = (BigInt(strReverse(str1)) + BigInt(strReverse(str2))).toString();
    str3 = strReverse(str3);
    let dummy = new ListNode(0,null);
    let ptr = dummy;
    for(let i=0;i<str3.length;i++) {
        ptr.next = new ListNode(Number(str3[i]),null);
        ptr = ptr.next;
    }
    return dummy.next;
}