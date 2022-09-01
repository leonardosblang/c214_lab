
const validate = require('validate.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    remainder: function(num1, num2) {
        return num1 % num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

rl.question('Enter the first number: ', (num1) => {
    const num1Validation = validate({num1}, {num1: {numericality: true}});
    if (num1Validation) {
        console.log('Invalid input. Please enter a number.');
        rl.close();
        return;
    }

    rl.question('Enter the second number: ', (num2) => {
        const num2Validation = validate({num2}, {num2: {numericality: true}});
        if (num2Validation) {
            console.log('Invalid input. Please enter a number.');
            rl.close();
            return;
        }

        rl.question('Enter the operation to perform: add, subtract, multiply, divide, or remainder ', (operation) => {
            const operationValidation = validate({operation}, {operation: {inclusion: ['add', 'subtract', 'multiply', 'divide', 'remainder']}});
            if (operationValidation) {
                console.log('Invalid input. Please enter a valid operation.');
                rl.close();
                return;
            }
            
           
            switch(operation) {
                case 'add':
                    console.log(calculator.add(parseInt(num1), parseInt(num2)));
                    break;
                case 'subtract':
                    console.log(calculator.subtract(parseInt(num1), parseInt(num2)));
                    break;
                case 'multiply':
                    console.log(calculator.multiply(parseInt(num1), parseInt(num2)));
                    break;
                case 'divide':
                    console.log(calculator.divide(parseInt(num1), parseInt(num2)));
                    break;
                case 'remainder':
                    console.log(calculator.remainder(parseInt(num1), parseInt(num2)));
                    break;
                default:
                    console.log('ERROR: Operation not recognized');
            }
       
            rl.close();
        });
    });
});
