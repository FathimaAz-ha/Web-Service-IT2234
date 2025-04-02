function findBudgetPrice(budget, keyboardPrices, mousePrices) {
    let maxSpent = -1;
    
    for (let keyboard of keyboardPrices) {
        for (let mouse of mousePrices) {
            let totalCost = keyboard + mouse;
            if (totalCost <= budget) {
                if (totalCost > maxSpent) {
                    maxSpent = totalCost;
                }
            }
        }
    }
    
    return maxSpent;
}

console.log(findBudgetPrice(60, [40, 50, 60], [5, 8, 12])); 
console.log(findBudgetPrice(10, [3, 1], [5, 2, 8]));       
console.log(findBudgetPrice(20, [30, 15], [8, 10, 6]));   