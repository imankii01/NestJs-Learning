
// filepath: /Users/ankit/development/simple-git/repo/nestjs-learning/dummy-2025-01-02T17-30-00-023Z.js
function multiply(a, b) {
      return a * b;
    }

function subtract(a, b) {
      return a - b;
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };