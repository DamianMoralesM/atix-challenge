const Utils = {
    
    checkAverageBiggerThan: (elements,value)=>{
        const average = elements => elements.reduce((a,b) => a + b, 0) / elements.length;

        return average > value        
    },
    checkBiggerThanMinMaxDifference: (elements,value)=>{
        const max = elements => Math.max(...elements);
        const min = elements => Math.min(...elements);

        return max - min > value
    }
}

exports.Utils = Utils;