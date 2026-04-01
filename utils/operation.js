export function add(numbers) {
    return {result: numbers.reduce((acc, num) => acc + num, 0)}
    }
    export function subtract(numbers) {
      return {result: numbers.reduce((acc, num) => acc - num, numbers[0])}
    }

    export function multiply(numbers) {
      return {result: numbers.reduce((acc, num) => acc * num, 1)}
    }

    export function divide(numbers) {
      return {result: numbers.reduce((acc, num) => acc / num, numbers[0])}
    }
