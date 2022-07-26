var reverseList = function(head) {
    let prevNode = null;
    
    while(head !== null){
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
          }
    return prevNode;
};












// 1 -> 2 -> 3 -> 4 -> 5 -> Null
// p         
//       h
//            n
// Null  1 -> 2 -> 3 -> 4 -> 5 -> Null
//
//