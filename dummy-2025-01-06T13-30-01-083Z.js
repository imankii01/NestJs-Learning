
// filepath: /Users/ankit/development/simple-git/repo/nestjs-learning/dummy-2025-01-06T13-30-01-083Z.js
function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

function multiply(a, b) {
      return a * b;
    }

function subtract(a, b) {
      return a - b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };
