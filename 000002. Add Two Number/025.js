var addTwoNumbers = function(l1, l2) {
    function sumNodes(n) {
        if(n.next != null) {
            return sumNodes(n.next) + n.val.toString()
        } else {
            return n.val.toString();
        }
    }

    return [...(BigInt(sumNodes(l1))+BigInt(sumNodes(l2)))+''].map(n=>+n).reverse().reduceRight((next,value) => {
        const out = new ListNode(value ?? 0);
        out.next = next;
        return out;
    },null)
};