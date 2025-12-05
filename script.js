//Задание 1
const containsChar = (string, char) => {
    return string.includes(char)
}

console.log(containsChar("Hello", "H"));

//Задание 2

const reverse = (str) => str.split('').reverse().join('');

console.log(reverse("hello"));
