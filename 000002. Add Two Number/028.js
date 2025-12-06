function sumTwoArrays(arr1, arr2) {
    if(arr2.length > arr1.length) {
        let temp = arr1;
        arr1 = arr2;
        arr2 = temp;
    }
    let summedList = [];
    for(let i=0; i<arr1.length; i++) {
        let v1 = arr1[arr1.length - 1 - i];
        let v2 = arr2[arr2.length - 1 - i] || 0;

        let s = v1 + v2;
        if(summedList[i]) {
            s++;
        }
        summedList[i] = s%10;
        if(s > 9) {
            summedList[i+1] = 1;
        }
    }
    return summedList;
}

function getListByArray(arr) {
    function getNextNode(arr,i) {
        return new ListNode(arr[i],arr.length > i+1 ? getNextNode(arr,i+1):null);
    }
    return getNextNode(arr,0);
}

function getArrayFromList(l) {
    let vals = [];
    do{
        vals.push(l.val);
        l = l.next;
    } while(l);
    return vals;
}

var addTwoNumbers = function(l1, l2) {
    let sumTotal = sumTwoArrays(getArrayFromList(l1).reverse(), getArrayFromList(l2).reverse());
    return getListByArray(sumTotal);
};