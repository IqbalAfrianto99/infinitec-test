const defineOperator = (str, operatorIndex = 1, defaultOpt = 'cont', separator = '_') => {
    let arr = str.split(separator); //Split string by operator
    
    return arr[operatorIndex] ? arr[operatorIndex] : defaultOpt 
}

module.exports = { defineOperator }