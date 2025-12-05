//Задание 1
const containsChar = (string, char) => {
    return string.includes(char)
}

console.log(containsChar("Hello", "H"));

//Задание 2

const reverse = (str) => {
    str.split('').reverse().join('');
}

console.log(reverse("hello"));

//Задание 3

const wordsToRegister = (str) => {
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

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

//Задание 5

const checkChars = (str, what, onWhat) =>{
    if (!str.includes(what)) {
        return 'Error';
    }

    return str.replace(what, onWhat);
}