var addTwoNumbers = function(l1, l2) {
    let first = [];
    let iter = l1;
    while(iter) {
        first.push(iter.val);
        iter = iter.next;
    }
    let second = [];
    iter = l2;
    while(iter) {
        second.push(iter.val);
        iter = iter.next;
    }

    let firstNum = first.reduce((acc,curr,index,array) => {
        const n = array.length;
        acc += BigInt(curr) * (BigInt(10) ** BigInt(index));
        return acc;
    },BigInt(0));

    let secondNum = second.reduce((acc,curr,index,array) => {
        const n = array.length;
        acc += BigInt(curr) * (BigInt(10) ** BigInt(index));
        return acc;
    },BigInt(0));

    const result = Array.from(String(firstNum + secondNum), Number);

    let index = result.length -1;
    let l3 = {
        val: result[index],
        next: null
    }
    iter = l3;
    while(index - 1 >= 0) {
        iter.next = {
            val: result[index-1],
            next: null
        }
        index--;
        iter = iter.next;
    }
    return l3;
};