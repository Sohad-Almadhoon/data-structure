// Valid Parnthses 
const isValid = (str) => {
    // {} [] 
    const stack = [];
    const obj = {
        "(": ")",
        "[": "]",
        "{":"}"
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        } else if (obj[stack.pop()] !== str[i]) return false;
        
    }
    return stack.length === 0; 
}
console.log(isValid('{}()'))
console.log(isValid("{)"));