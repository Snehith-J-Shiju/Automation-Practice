function isPalindrome(str) {

    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return str === result;
}

console.log(isPalindrome('madam'));  // true
console.log(isPalindrome('hello'));  // false