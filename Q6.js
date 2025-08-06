let numbers = [1, 2, 3, 4, 5];
for (let i=0 ; i < numbers.length; i++) {
    if (i < 0) {
        break; // Prevents infinite loop
    }
    console.log(numbers[i]);
    
}

for (let i; i < numbers.length; i++) {
    if (i === 3){
        continue; // Skips the iteration when i is 3
    }
    console.log(numbers[i]);
}
