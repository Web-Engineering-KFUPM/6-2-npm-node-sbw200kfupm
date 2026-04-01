export function add(numbers) {
    return {result: numbers.reduce((acc, num) => acc + num, 0)}
    }

export function subtract(numbers) {
  const [first, ...rest] = numbers;
  return {
    result: rest.reduce((acc, num) => acc - num, first)
  };
}

export function multiply(numbers) {
  return {result: numbers.reduce((acc, num) => acc * num, 1)}
}

export function divide(numbers) {
  const [first, ...rest] = numbers;

  if (rest.includes(0)) {
    return { result: NaN, error: "Division by zero" };
  }

  return {
    result: rest.reduce((acc, num) => acc / num, first)
  };
}

