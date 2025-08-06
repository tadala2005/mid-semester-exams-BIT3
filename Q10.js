function numbers(numbers) {
    const negativeNumbers = '-';
    const negativeNumberCount = {};

    for (let char of numbers) {
        if (numbers.includes(char)) {
            
            if (negativeNumberCount[char]) {
                negativeNumberCount[char]++;
            } else {
                negativeNumberCount[char] = 1;
            }
        }
    }

    return negativeNumberCount;
}

