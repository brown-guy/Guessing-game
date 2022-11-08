let enteredNum = parseInt(prompt("Enter a number"));

while (!enteredNum) {
    enteredNum = parseInt("Enter a valid Number");
}

let num = Math.floor(Math.random() * enteredNum) + 1;
console.log(num);
let guess = parseInt(prompt("Enter your guess!!"));
let count = 1;
while (guess !== num) {
    count++;
    if (guess > num) {
        guess = parseInt(prompt("Too High. Take another guess!"));
    }
    else guess = parseInt(prompt("Too Low. Take another guess!"));
}

console.log(`It took you ${count} tries!`)
console.log("Congrats!! You win!")
