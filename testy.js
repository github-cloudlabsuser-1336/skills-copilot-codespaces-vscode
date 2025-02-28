class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.result = a / b;
        return this.result;
    }

    getResult() {
        return this.result;
    }

    clear() {
        this.result = 0;
    }
}

// Example usage:
const calculator = new Calculator();

console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3));
console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3));
console.log("Division: 6 / 3 =", calculator.divide(6, 3));

calculator.clear();
console.log("Result after clearing:", calculator.getResult());