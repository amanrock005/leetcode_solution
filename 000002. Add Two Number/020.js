var addTwoNumbers = function(l1, l2) {
    const l1ToArray = [];
    const l2ToArray = [];

    const getNodes1 = (currentNode) => {
        while(currentNode !== null) {
            l1ToArray.push(parseInt(currentNode.val));
            currentNode = currentNode.next;
        }
    }

    const getNodes2 = (currentNode) => {
        while(currentNode !== null) {
            l2ToArray.push(parseInt(currentNode.val));
            currentNode = currentNode.next;
        }
    }

    getNodes1(l1);
    getNodes2(l2);

    const num1 = BigInt(l1ToArray.reverse().join(''));
    const num2 = BigInt(l2ToArray.reverse().join(''));
    const sum = num1 + num2;

    if(sum === 0n) {
        return new ListNode(0);
    }

    const sumStr = sum.toString();
    const sumArr = sumStr.split('').reverse().map(Number);

    let dummyHead = new ListNode();
    let current = dummyHead;

    for(const digit of sumArr) {
        current.next = new ListNode(digit);
        current = current.next;
    }
    return dummyHead.next;
};