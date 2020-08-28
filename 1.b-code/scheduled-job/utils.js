const Utils = {
    
    checkAverageBiggerThan: (elements,value)=>{
        const average = elements => elements.reduce((a,b) => a + b, 0) / elements.length;
        const averageValue = average(elements);
        console.log('Average: ' + averageValue);
        console.log('M: ' + value);
        return averageValue > value        
    },
    checkBiggerThanMinMaxDifference: (elements,value)=>{
        const max = elements => Math.max(...elements);
        const min = elements => Math.min(...elements);
        const maxValue = max(elements);
        const minValue = min(elements);
        console.log('Max: ' + maxValue);
        console.log('Min: ' + minValue);
        console.log('S: ' + value);

        return maxValue - minValue > value
    }
}

exports.Utils = Utils;