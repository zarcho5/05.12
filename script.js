//Задание 1
const containsChar = (string, char) => {
    return string.includes(char)
}

console.log(containsChar("Hello", "H"));

//Задание 2

const reverse = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverse("hello"));

//Задание 3

const wordsToRegister = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(wordsToRegister("HiWorld"));

//Задание 4

const sumOfDigitsInString = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= '0' && char <= '9') {
            sum += parseInt(char, 10);
        }
    }
    return sum;
};

console.log(sumOfDigitsInString("a1b2c3"));

//Задание 5

const checkChars = (str, targetChar, onWhat) =>{
    if (!str.includes(targetChar)) {
        return 'Error';
    }

    return str.replace(targetChar, onWhat);
}

console.log(checkChars("banan", "a", "*"));