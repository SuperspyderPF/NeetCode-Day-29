var nodesBetweenCriticalPoints = function(head) {
    let index = 0;
    let slow = head;
    let curr = head.next;
    let fast = head.next.next;
    let stack = [];
    let min = Infinity;
    while(fast!==null){
        if(isCritical(slow.val, curr.val, fast.val)){
            if(stack.length){
                min = Math.min( index - stack[stack.length - 1], min);
                if(stack.length===2) stack.pop();
            }
            stack.push(index);
        }
        index++;
        slow = slow.next, curr = curr.next, fast = fast.next;
    }
    if(stack.length<2) return [-1,-1];
    return [ min, stack[1] - stack[0]];
};

var isCritical = function(a,b,c) {
   return (b>c&&b>a) || (b<c&&b<a);  
};