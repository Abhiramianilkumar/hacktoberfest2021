const number = parseInt(prompt('Enter the number of terms: '));
let a1 = 0, a2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(a1);
    nextTerm = a1 + a2;
    a1 = a2;
    a2 = nextTerm;
}
