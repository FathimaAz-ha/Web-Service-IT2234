function maxValue(n) {
    let digits = n.toString().split('');
    
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] < digits[j]) {
                let temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
    }
    
    return parseInt(digits.join(''));
}

console.log(maxValue(215));  
console.log(maxValue(1093)); 