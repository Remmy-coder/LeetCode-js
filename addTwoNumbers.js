var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let x = l1;
    let y = l2;
    let current = dummy;
    let carry = 0;

    while (x !== null || y !== null) {
        let sum = carry;
        if (x) {
            sum += p1.val;
            x = x.next;
        }
        if (y) {
            sum += y.val;
            y = y.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry)
    }
    return dummy.next;
}