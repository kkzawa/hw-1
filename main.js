let str = 'My name 457 is Alex';
let rex = /My name 457 is Alex/giu;
let result = str.match(rex)
console.log(result);

let str1 = 'HellotWorldnTest';
let rex1 = /t/gu;
let result1 = str1.match(rex1)
console.log(result1);  

let str2 = 'HellotWorldnTest';
let rex2 = /n/gu;
let result2 = str2.match(rex2)
console.log(result2);

function countChar(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    
    return count;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) {
    return 1;
    } else {
    return n * factorialRecursive(n-1);
    }
    }
    
    const numbers = 5;
    const factorials = factorialRecursive(numbers);
    console.log(`Факториал ${numbers} равен ${factorials}`);