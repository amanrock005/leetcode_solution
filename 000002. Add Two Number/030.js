var addTwoNumbers = function(l1, l2) {
    const result = {val: 0, next: null}
    let current = result;

    function walk(head1, head2, acc) {
        const sum = (head1?.val || 0) + (head2?.val || 0) + acc;
        const nextDigit = (sum / 10) | 0;
        current.val = sum % 10;

        if(head1?.next || head2?.next) {
            current.next = {val: 0, next:null}
            current = current.next;
            walk(head1?.next, head2?.next, nextDigit)
        } else if(nextDigit) {
            current.next = {val: nextDigit, next:null}
        }
    }

    walk(l1,l2,0)
    return result;
};