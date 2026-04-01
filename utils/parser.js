import _ from "lodash"

export function parseNumbers(input) {
  return _.compact(_.map(input, (str) => {
    const num = Number(str);
    return isNaN(num) ? null : num;
  }));
}

export function isValidOperation(operation) {
return _.includes(['add', 'subtract', 'multiply', 'divide'], operation)
}