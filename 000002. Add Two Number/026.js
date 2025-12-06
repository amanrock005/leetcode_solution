var addTwoNumbers = function(l1, l2) {
    return constructList(calculateReversedSum(getNumber(l1), getNumber(l2)), 0);
};

const calculateReversedSum = (n1, n2) => {
    let i = n1.length - 1;
    let j = n2.length - 1;
    let remainder = 0;

    const resultReversed = [];
    while(i >= 0 || j>= 0) {
        const num1 = i < 0 ? 0 : +n1[i];
        const num2 = j < 0 ? 0 : +n2[j];

        const calculus = num1 + num2 + remainder;
        remainder = Math.floor(calculus / 10);
        resultReversed.push(calculus % 10);
        i--;
        j--;
    }
    if(remainder) {
        resultReversed.push(remainder);
    }

    return resultReversed;
}

const getNumber = (list) => {
    if(!list.next) {
        return [list.val];
    }
    return [...getNumber(list.next), list.val];
}

const constructList = (number, index) => {
    if(index === number.length-1) {
        return {val: +number[index], next: null}
    }
    return {val: +number[index], next: constructList(number, index+1)}
}